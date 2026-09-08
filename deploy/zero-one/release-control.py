"""Phase-based production release controller. Recovery material stays outside Git."""

import datetime, fcntl, hashlib, json, os, pathlib, re, shutil, subprocess, sys, tempfile, time

if not __debug__:
    raise RuntimeError("release checks require Python assertions; do not use optimization")


def validate_metadata(meta, root):
    if root.parent.name != ".release-backups" or root.name != meta["id"]:
        raise ValueError("recovery directory must be inside the production .release-backups directory")
    for key in ("merge_sha", "production_before"):
        if not re.fullmatch(r"[0-9a-f]{40}", meta[key]):
            raise ValueError("release sources must be full commit SHAs")
    for key in ("old_images", "new_images"):
        if set(meta[key]) != {"zero-one-api-sub2api-1", "zero-one-api-edge-1"}:
            raise ValueError("both application image identities are required")
        for name, image in meta[key].items():
            component = "sub2api" if name.endswith("sub2api-1") else "edge"
            if not re.fullmatch(
                r"ghcr\.io/xiaosike/zero-one-" + component + r"@sha256:[0-9a-f]{64}",
                image,
            ):
                raise ValueError("only digest-pinned product images are accepted")
    names = meta["expected_migrations"]
    if (
        not isinstance(names, list)
        or len(names) != len(set(names))
        or any(not isinstance(n, str) or not re.fullmatch(r"[0-9][A-Za-z0-9_]*\.sql", n) for n in names)
    ):
        raise ValueError("expected migrations must be unique complete SQL filenames")
    if not re.fullmatch(r"[A-Za-z0-9_-]{32,}", meta["probe_secret"]):
        raise ValueError("a private per-release maintenance probe secret is required")


def migration_projection(columns, pending):
    # Monitor cursors and their timestamp are derived, asynchronously advancing
    # state. Every business column, including all invoices, remains exact.
    _ = pending
    result = {table: list(names) for table, names in columns.items()}
    table = "channel_monitor_v2_watermarks"
    if table in result:
        result[table] = [
            name for name in result[table] if name not in ("error_coverage_start", "backfill_cursor", "updated_at")
        ]
    return result


def configure(recovery_dir):
    global ROOT, META, REPO, ENV, LOCK, ACTIVE, STATE, LOG, PG, REDIS, APP, EDGE, COMPOSE
    os.umask(0o077)
    ROOT = pathlib.Path(recovery_dir).resolve()
    META = json.loads((ROOT / "release-metadata.json").read_text())
    REPO = ROOT.parent.parent
    ENV = REPO / "deploy/zero-one/.env"
    assert ROOT.parent == REPO / ".release-backups" and ROOT.name == META["id"]
    validate_metadata(META, ROOT)
    os.chdir(REPO)
    LOCK = (REPO / ".release-backups/.upgrade-controller.lock").open("a")
    fcntl.flock(LOCK, fcntl.LOCK_EX)
    ACTIVE = REPO / ".release-backups/.active-upgrade.json"
    STATE = ROOT / "cutover-state.json"
    LOG = (ROOT / "cutover-commands.log").open("a")
    PG = "zero-one-api-postgres-1"
    REDIS = "zero-one-api-redis-1"
    APP = "zero-one-api-sub2api-1"
    EDGE = "zero-one-api-edge-1"
    COMPOSE = [
        "docker",
        "compose",
        "--env-file",
        str(ENV),
        "-f",
        "deploy/zero-one/compose.yml",
    ]


def run(args, stdin=None):
    return subprocess.check_output(args, input=stdin, text=True, stderr=LOG, timeout=660).strip()


def record(name, data):
    target = ROOT / name
    with tempfile.NamedTemporaryFile(mode="w", dir=ROOT, prefix=".record-", delete=False) as stream:
        json.dump(data, stream, indent=2)
        stream.flush()
        os.fsync(stream.fileno())
        temp = pathlib.Path(stream.name)
    temp.replace(target)


def assert_release_owner():
    assert ACTIVE.exists() and json.loads(ACTIVE.read_text())["id"] == META["id"], (
        "another release owns the production transaction"
    )


def release_owner():
    if ACTIVE.exists():
        assert_release_owner()
        ACTIVE.unlink()


def state():
    return json.loads(STATE.read_text())


def phase(value):
    s = state()
    s["phase"] = value
    s["time"] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    record(STATE.name, s)
    print(value, flush=True)


def containers():
    return {
        c["Name"].lstrip("/"): {
            "id": c["Id"],
            "image": c["Config"]["Image"],
            "image_id": c["Image"],
            "mounts": sorted(c["Mounts"], key=lambda m: m["Destination"]),
            "status": c["State"]["Status"],
            "health": c["State"].get("Health", {}).get("Status"),
        }
        for c in json.loads(run(["docker", "inspect", APP, EDGE, PG, REDIS]))
    }


def healthy():
    c = containers()
    assert all(x["health"] == "healthy" for x in c.values())
    return c


def dependencies():
    now = containers()
    before = state()["before"]
    for name in [PG, REDIS]:
        assert (
            now[name]["id"] == before[name]["id"]
            and now[name]["mounts"] == before[name]["mounts"]
            and now[name]["health"] == "healthy"
        ), name + " changed"
    return now


def config_preserved():
    before = dict(
        x.split("=", 1)
        for x in (ROOT / "environment-before.env").read_text().splitlines()
        if x and not x.startswith("#") and "=" in x
    )
    after = dict(x.split("=", 1) for x in ENV.read_text().splitlines() if x and not x.startswith("#") and "=" in x)
    for k, v in before.items():
        if k not in ("SUB2API_IMAGE", "EDGE_IMAGE"):
            assert after.get(k) == v, "non-image configuration changed"
    assert before.keys() == after.keys(), "configuration keys changed"
    current = containers()
    old = state()["before"]
    for n in [APP, EDGE]:
        assert current[n]["mounts"] == old[n]["mounts"], "application persistence mounts changed"


def sql(query):
    return run(
        [
            "docker",
            "exec",
            "-i",
            PG,
            "psql",
            "-X",
            "-qAt",
            "-v",
            "ON_ERROR_STOP=1",
            "-U",
            "sub2api",
            "-d",
            "sub2api",
        ],
        query,
    )


def redis(*args):
    return run(["docker", "exec", REDIS, "redis-cli", "--raw", *args])


def edge_config():
    return json.loads(
        run(
            [
                "docker",
                "exec",
                EDGE,
                "wget",
                "-q",
                "-O",
                "-",
                "http://127.0.0.1:2019/config/",
            ]
        )
    )


def load_config(config):
    run(
        [
            "docker",
            "exec",
            "-i",
            EDGE,
            "wget",
            "-q",
            "--header=Content-Type: application/json",
            "--post-file=/dev/stdin",
            "-O",
            "-",
            "http://127.0.0.1:2019/load",
        ],
        json.dumps(config),
    )


def gate(config):
    def protect_streams(value):
        if isinstance(value, dict):
            if value.get("handler") == "reverse_proxy":
                value["stream_close_delay"] = 300_000_000_000
            for child in value.values():
                protect_streams(child)
        elif isinstance(value, list):
            for child in value:
                protect_streams(child)

    protect_streams(config)
    for server in config["apps"]["http"]["servers"].values():
        server["routes"].insert(
            0,
            {
                "match": [
                    {
                        "not": [
                            {"path": ["/health"]},
                            {"header": {"X-Zero-One-Maintenance-Probe": [META["probe_secret"]]}},
                        ]
                    }
                ],
                "handle": [
                    {
                        "handler": "static_response",
                        "status_code": 503,
                        "headers": {
                            "Retry-After": ["120"],
                            "Cache-Control": ["no-store"],
                        },
                        "body": "Scheduled maintenance; retry shortly.",
                    }
                ],
                "terminal": True,
            },
        )
        server["routes"].insert(
            1,
            {
                "handle": [
                    {
                        "handler": "headers",
                        "request": {"delete": ["X-Zero-One-Maintenance-Probe"]},
                    }
                ]
            },
        )
    load_config(config)
    code = run(
        [
            "curl",
            "-sS",
            "--resolve",
            "api.01yapi.com:443:127.0.0.1",
            "-o",
            "/dev/null",
            "-w",
            "%{http_code}",
            "https://api.01yapi.com/api/v1/auth/me",
        ]
    )
    assert code == "503", "maintenance gate failed"


def slots(include_ws_ingress=True):
    now = int(redis("TIME").splitlines()[0])
    n = 0
    for prefix, ttl in [
        ("concurrency:account:", 1800),
        ("concurrency:user:", 1800),
        ("concurrency:api_key:", 1800),
        ("concurrency:live:account:", 60),
        ("concurrency:live:user:", 60),
        ("concurrency:live:api_key:", 60),
        ("concurrency:openai_ws_ingress:api_key:", 60),
    ]:
        if not include_ws_ingress and prefix == "concurrency:openai_ws_ingress:api_key:":
            continue
        for key in redis("--scan", "--pattern", prefix + "*").splitlines():
            if not key or key.endswith("active_index"):
                continue
            if redis("TYPE", key) == "zset":
                n += int(redis("ZCOUNT", key, str(now - ttl), "+inf"))
    for pattern in ["concurrency:wait:*", "wait:account:*"]:
        for key in redis("--scan", "--pattern", pattern).splitlines():
            if key and redis("TYPE", key) == "string":
                n += max(0, int(redis("GET", key)))
    return n


def websocket_slots():
    now = int(redis("TIME").splitlines()[0])
    count = 0
    for prefix in [
        "concurrency:openai_ws_ingress:api_key:",
        "concurrency:live:account:",
        "concurrency:live:user:",
        "concurrency:live:api_key:",
    ]:
        for key in redis("--scan", "--pattern", prefix + "*").splitlines():
            if key and not key.endswith("active_index") and redis("TYPE", key) == "zset":
                count += int(redis("ZCOUNT", key, str(now - 60), "+inf"))
    return count


def wait_quiet_before_reload():
    # Caddy 2.8.4 only cleans up hijacked/upgraded connections on reload. The
    # actual proxy test proves accepted ordinary/SSE responses continue to finish.
    proof = json.loads((ROOT / "CADDY_ACCEPTED_SSE_DRAIN_VERIFIED.json").read_text())
    assert proof["accepted_sse_completed_through_reload"] and proof["new_requests_rejected"] == 503
    deadline = time.monotonic() + 300
    while time.monotonic() < deadline:
        if websocket_slots() == 0:
            record(
                "pre-gate-websocket-check.json",
                {
                    "active_upgraded_connection_markers": 0,
                    "accepted_sse_drain_proven": True,
                },
            )
            return
        time.sleep(5)
    raise RuntimeError("WebSocket connections remain active; leave traffic unchanged")


def verify_migration_ledger(before, after, expected):
    original = {x["filename"]: x for x in before}
    current = {x["filename"]: x for x in after}
    assert all(current.get(name) == row for name, row in original.items()), "an applied migration record changed"
    assert expected.issubset(current), "required migrations are missing"
    assert set(current) - set(original) == expected - set(original), "unexpected migration delta"


def ident(x):
    return '"' + x.replace('"', '""') + '"'


def fingerprints(label):
    path = ROOT / "cutover-original-columns.json"
    if not path.exists():
        cols = json.loads(
            sql(
                "SELECT jsonb_object_agg(table_name,cols) FROM (SELECT table_name,jsonb_agg(column_name ORDER BY ordinal_position) cols FROM information_schema.columns WHERE table_schema='public' AND table_name<>'schema_migrations' GROUP BY table_name) t"
            )
        )
        record(path.name, cols)
    else:
        cols = json.loads(path.read_text())
    cols = migration_projection(cols, META["expected_migrations"])
    stmts = ["BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY; SET LOCAL TIME ZONE 'UTC';"]
    for table, columns in sorted(cols.items()):
        literal = "'" + table.replace("'", "''") + "'"
        stmts.append(
            f"WITH h AS (SELECT encode(sha256(convert_to(to_jsonb(t)::text,'UTF8')),'hex') v FROM (SELECT {','.join(map(ident, columns))} FROM public.{ident(table)}) t) SELECT jsonb_build_object('table',{literal},'rows',count(*),'digest',encode(sha256(convert_to(coalesce(string_agg(v,'' ORDER BY v),''),'UTF8')),'hex')) FROM h;"
        )
    stmts.append("COMMIT;")
    data = [json.loads(x) for x in sql("\n".join(stmts)).splitlines() if x]
    record(label + "-fingerprints.json", data)
    return data


def encrypt_pipeline(command, output):
    assert not (ROOT / output).exists()
    subprocess.run(
        [
            "bash",
            "-o",
            "pipefail",
            "-c",
            command + ' | age -r "$1" -o "$2"',
            "release",
            META["recipient"],
            str(ROOT / output),
        ],
        stdout=LOG,
        stderr=LOG,
        check=True,
    )


def write_image(key, value):
    assert re.fullmatch(r"ghcr.io/xiaosike/zero-one-(?:sub2api|edge)@sha256:[0-9a-f]{64}", value)
    lines = ENV.read_text().splitlines()
    assert sum(x.startswith(key + "=") for x in lines) == 1
    content = "\n".join(key + "=" + value if x.startswith(key + "=") else x for x in lines) + "\n"
    with tempfile.NamedTemporaryFile(mode="w", dir=ENV.parent, prefix=".env.release-", delete=False) as stream:
        stream.write(content)
        temp = pathlib.Path(stream.name)
    temp.chmod(0o600)
    temp.replace(ENV)


def wait_app():
    for _ in range(90):
        c = containers()[APP]
        if c["health"] == "healthy":
            return
        if c["status"] in ("exited", "dead"):
            break
        time.sleep(1)
    raise RuntimeError("Backend did not become healthy")


def firewall(enable):
    interface = run(["ip", "-j", "route", "show", "default"])
    nic = json.loads(interface)[0]["dev"]
    chain = "ZERO_ONE_RELEASE"
    for tool in ["iptables", "ip6tables"]:
        if enable:
            run([tool, "-w", "5", "-N", chain])
            run(
                [
                    tool,
                    "-w",
                    "5",
                    "-A",
                    chain,
                    "-p",
                    "tcp",
                    "-m",
                    "multiport",
                    "--dports",
                    "80,443",
                    "-j",
                    "REJECT",
                    "--reject-with",
                    "tcp-reset",
                ]
            )
            run(
                [
                    tool,
                    "-w",
                    "5",
                    "-A",
                    chain,
                    "-p",
                    "udp",
                    "--dport",
                    "443",
                    "-j",
                    "REJECT",
                ]
            )
            for target in ["INPUT", "FORWARD"]:
                run([tool, "-w", "5", "-I", target, "1", "-i", nic, "-j", chain])
        else:
            for target in ["INPUT", "FORWARD"]:
                subprocess.run(
                    [tool, "-w", "5", "-D", target, "-i", nic, "-j", chain],
                    stdout=LOG,
                    stderr=LOG,
                )
            subprocess.run([tool, "-w", "5", "-F", chain], stdout=LOG, stderr=LOG)
            subprocess.run([tool, "-w", "5", "-X", chain], stdout=LOG, stderr=LOG)


def backup_health_command(backup):
    checker = str(pathlib.Path(__file__).with_name("backup-health.py"))
    if backup.get("mode") == "signed_receipt":
        receipt_name = backup.get("receipt")
        signature_name = backup.get("signature")
        if not isinstance(receipt_name, str) or pathlib.Path(receipt_name).name != receipt_name:
            raise ValueError("backup receipt must be a file in the release recovery directory")
        if not isinstance(signature_name, str) or pathlib.Path(signature_name).name != signature_name:
            raise ValueError("backup signature must be a file in the release recovery directory")
        if backup.get("public_key") != "/etc/zero-one/backup-receipt.pub":
            raise ValueError("backup receipt must use the installed off-host verifier key")
        return [
            sys.executable,
            checker,
            "--receipt",
            str(ROOT / receipt_name),
            "--signature",
            str(ROOT / signature_name),
            "--public-key",
            backup["public_key"],
            "--expected-source",
            META["merge_sha"],
            "--expected-snapshot",
            META["id"],
        ]
    backup_dir = backup.get("backup_dir")
    if not isinstance(backup_dir, str) or not backup_dir.startswith("/"):
        raise ValueError("mounted backup directory must be absolute")
    return [sys.executable, checker, backup_dir]


def backup_record_ready(backup):
    if not backup.get("sha256_verified") or not backup.get("restore_verified"):
        return False
    mode = backup.get("backup_mode", "scheduled")
    if mode == "scheduled":
        return backup.get("scheduled_backup_healthy") is True
    if mode == "one_time_release":
        return backup.get("backup_ready") is True and backup.get("scheduled_backup_healthy") is False
    return False


def execute(action):
    if action == "watchdog":
        if not STATE.exists() or state()["phase"] in (
            "observing",
            "complete",
            "cancelled-before-app-stop",
            "rolled-back-apps-data-retained",
        ):
            sys.exit(0)
        action = "rollback"
    if action != "preflight" and state()["phase"] not in (
        "complete",
        "cancelled-before-app-stop",
        "rolled-back-apps-data-retained",
    ):
        assert_release_owner()
    if action == "preflight":
        assert not STATE.exists(), "cutover already initialized"
        assert not ACTIVE.exists(), "another release transaction is active"
        backup = json.loads((ROOT / "OFFHOST_BACKUP_VERIFIED.json").read_text())
        assert backup_record_ready(backup), "verified off-host release backup required"
        applied = {x["filename"] for x in json.loads(sql("SELECT jsonb_agg(to_jsonb(m)) FROM schema_migrations m"))}
        target = set(
            run(
                [
                    "git",
                    "ls-tree",
                    "-r",
                    "--name-only",
                    META["merge_sha"],
                    "backend/migrations",
                ]
            ).splitlines()
        )
        target = {path.rsplit("/", 1)[-1] for path in target if path.endswith(".sql")}
        assert set(META["expected_migrations"]) == target - applied, "migration delta does not match target source"
        live_backup = json.loads(run(backup_health_command(backup)))
        assert live_backup["sha256_verified"] and live_backup["backup_ready"]
        if backup.get("mode") == "signed_receipt":
            assert live_backup["restore_verified"]
        assert live_backup["backup_mode"] == backup.get("backup_mode", "scheduled")
        if live_backup["backup_mode"] == "scheduled":
            assert live_backup["scheduled_backup_healthy"]
        assert backup["snapshot_id"] == META["id"] and backup["source_sha"] == META["merge_sha"]
        before = healthy()
        assert all(before[n]["image"] == META["old_images"][n] for n in [APP, EDGE])
        for name in [APP, EDGE]:
            img = META["new_images"][name]
            assert "@sha256:" in img
            props = json.loads(run(["docker", "image", "inspect", img]))[0]
            assert (
                props["Architecture"] == "amd64"
                and props["Config"]["Labels"]["org.opencontainers.image.revision"] == META["merge_sha"]
            )
            assert (
                props["Config"]["Labels"]["org.opencontainers.image.source"]
                == "https://github.com/XiaoSiKe/zero-one-api"
            )
        run(["git", "diff", "--exit-code"])
        run(["git", "diff", "--cached", "--exit-code"])
        assert run(["git", "rev-parse", "HEAD"]) == META["production_before"]
        assert (
            int(
                sql(
                    "SELECT count(*) FROM batch_image_jobs WHERE status NOT IN ('completed','failed','cancelled','output_deleted')"
                )
            )
            == 0
        ), "unfinished batch workload must complete before cutover"
        database_bytes = int(sql("SELECT pg_database_size(current_database())"))
        assert shutil.disk_usage(REPO).free > 3 * database_bytes + 1024**3, (
            "insufficient room for backups, indexes and rollback"
        )
        assert (ROOT / "FINAL_OLD_NEW_IMAGE_COMPATIBILITY.json").exists(), (
            "exact published-image restore/rollback proof missing"
        )
        proof = json.loads((ROOT / "FINAL_OLD_NEW_IMAGE_COMPATIBILITY.json").read_text())
        assert any(x["image"] == META["new_images"][APP] and x["mode"] == "new" for x in proof)
        record(
            "migration-ledger-before.json",
            json.loads(sql("SELECT jsonb_agg(to_jsonb(m) ORDER BY filename) FROM schema_migrations m")),
        )
        record("caddy-before.json", edge_config())
        (ROOT / "environment-before.env").write_bytes(ENV.read_bytes())
        record(
            STATE.name,
            {
                "phase": "prepared",
                "before": before,
                "env_hash": hashlib.sha256(ENV.read_bytes()).hexdigest(),
            },
        )
        ACTIVE.write_text(json.dumps({"id": META["id"], "source": META["merge_sha"]}))
        ACTIVE.chmod(0o600)
        print("Production images, dependencies, migration ledger and rollback state verified.")
    elif action == "drain-backup":
        assert state()["phase"] == "prepared"
        dependencies()
        run(["systemctl", "is-active", "--quiet", "zero-one-release-watchdog-" + META["id"] + ".timer"])
        phase("waiting-for-websockets")
        wait_quiet_before_reload()
        gate(edge_config())
        phase("draining")
        deadline = time.monotonic() + 300
        stable = None
        last = None
        while time.monotonic() < deadline:
            count = slots() + int(
                sql(
                    "SELECT count(*) FROM batch_image_jobs WHERE status NOT IN ('completed','failed','cancelled','output_deleted')"
                )
            )
            billed = sql(
                "SELECT count(*)::text || '|' || coalesce(max(id),0)::text || '|' || coalesce(sum(actual_cost),0)::text FROM usage_logs"
            )
            if count == 0 and billed == last:
                if stable is None:
                    stable = time.monotonic()
                if time.monotonic() - stable >= 35:
                    break
            else:
                stable = None
            last = billed
            with (ROOT / "drain-events.jsonl").open("a") as evidence:
                evidence.write(
                    json.dumps(
                        {
                            "at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                            "active_markers": count,
                            "stable_seconds": 0 if stable is None else int(time.monotonic() - stable),
                        }
                    )
                    + "\n"
                )
            time.sleep(5)
        else:
            raise RuntimeError("Unable to drain safely within five minutes")
        # Verify email tasks accepted by this process all completed; never log addresses.
        logs = subprocess.check_output(["docker", "logs", APP], text=True, stderr=subprocess.STDOUT)
        enqueued = logs.count("[EmailQueue] Enqueued ")
        completed = sum(
            1
            for line in logs.splitlines()
            if "[EmailQueue] Worker " in line and (" sent " in line or " failed to send " in line)
        )
        assert completed >= enqueued, "unsettled email tasks; cancel release"
        # Request/financial drain is complete. Close remaining inbound HTTP connections
        # within this container only; keep its listener and all outbound/DB connections.
        assert time.monotonic() + 10 < deadline, "not enough drain budget to close residual ingress safely"
        process = json.loads(run(["docker", "inspect", APP]))[0]
        pid = str(process["State"]["Pid"])
        assert int(pid) > 0
        socket_tool = ["nsenter", "--target", pid, "--net", "ss"]
        (ROOT / "residual-ingress-before.txt").write_text(
            run(socket_tool + ["-Hnt", "state", "established", "sport", "=", ":8080"])
        )
        run(socket_tool + ["-K", "-t", "state", "established", "sport", "=", ":8080"])
        for _ in range(5):
            time.sleep(1)
            assert slots() == 0, "model slot appeared after ingress closure"
            assert (
                sql(
                    "SELECT count(*)::text || '|' || coalesce(max(id),0)::text || '|' || coalesce(sum(actual_cost),0)::text FROM usage_logs"
                )
                == last
            ), "billing changed after declared drain"
        run(["docker", "stop", "--time", "30", APP])
        assert containers()[APP]["status"] == "exited"
        info = json.loads(run(["docker", "inspect", APP]))[0]
        assert info["State"]["ExitCode"] == 0, "Backend did not stop cleanly"
        shutdown = subprocess.check_output(
            ["docker", "logs", "--since", state()["time"], APP],
            text=True,
            stderr=subprocess.STDOUT,
        )
        (ROOT / "backend-final-shutdown.log").write_text(shutdown)
        assert (
            "[Cleanup] UsageRecordWorkerPool succeeded" in shutdown
            and "[Cleanup] All cleanup steps completed" in shutdown
        ), "background cleanup did not finish successfully"
        assert not any(
            x in shutdown.lower()
            for x in [
                "record_usage_failed",
                "usage_record.task_dropped",
                "usage_record.task_panic",
                "server forced to shutdown",
                "cleanup timed out",
            ]
        ), "unsettled billing or incomplete shutdown"
        dependencies()
        fingerprints("cutover-before")
        record(
            "cutover-anchors.json",
            {
                "usage_max_id": int(sql("SELECT coalesce(max(id),0) FROM usage_logs")),
                "users_balances": sql(
                    "SELECT encode(sha256(convert_to(coalesce(jsonb_agg(jsonb_build_array(id,balance) ORDER BY id)::text,'[]'),'UTF8')),'hex') FROM users"
                ),
            },
        )
        encrypt_pipeline(
            "docker exec "
            + PG
            + ' sh -ec \'exec pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" --format=custom --compress=6 --no-owner --no-privileges\'',
            "cutover-postgres.dump.age",
        )
        redis("SAVE")
        encrypt_pipeline("docker exec " + REDIS + " cat /data/dump.rdb", "cutover-redis.rdb.age")
        encrypt_pipeline(
            "tar -czf - deploy/zero-one/.env deploy/zero-one/compose.yml deploy/zero-one/Caddyfile deploy/zero-one/Caddyfile.shared deploy/zero-one/state/sub2api deploy/zero-one/state/caddy-data deploy/zero-one/state/caddy-config",
            "cutover-state.tar.gz.age",
        )
        record(
            "cutover-checksums.json",
            {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in ROOT.glob("cutover-*.age")},
        )
        phase("stable-backup-ready")
    elif action == "migrate-backend":
        assert state()["phase"] == "stable-backup-ready" and (ROOT / "CUTOVER_OFFHOST_VERIFIED").exists()
        assert containers()[APP]["status"] == "exited"
        dependencies()
        proof = json.loads((ROOT / "FINAL_CUTOVER_RESTORE_VERIFIED.json").read_text())
        assert (
            proof["image"] == META["new_images"][APP]
            and proof["matches_stable_production_snapshot"]
            and proof["migration_preserved_original_columns"]
        ), "final backup restore proof does not match release"
        assert (
            proof["snapshot_id"] == META["id"]
            and proof["archive_sha256"]
            == json.loads((ROOT / "cutover-checksums.json").read_text())["cutover-postgres.dump.age"]
        ), "final restore proof is for a different snapshot"
        info = json.loads(run(["docker", "inspect", APP]))[0]
        (ROOT / "application-runtime.env").write_text("\n".join(info["Config"]["Env"]) + "\n")
        pg_info = json.loads(run(["docker", "inspect", PG]))[0]
        networks = sorted(set(info["NetworkSettings"]["Networks"]) & set(pg_info["NetworkSettings"]["Networks"]))
        assert networks, "Backend and PostgreSQL have no shared network"
        run(
            [
                "docker",
                "run",
                "--rm",
                "--read-only",
                "--tmpfs",
                "/tmp",
                "--network",
                networks[0],
                "--env-file",
                str(ROOT / "application-runtime.env"),
                META["new_images"][APP],
                "--migrate-only",
            ]
        )
        before = json.loads((ROOT / "cutover-before-fingerprints.json").read_text())
        after = fingerprints("cutover-migrated")
        assert before == after, "original rows changed during migration"
        assert (
            sql("SELECT count(*) FROM schema_migrations WHERE filename='234_upstream_declared_usage_cost.sql'") == "1"
        )
        expected = set(META["expected_migrations"])
        ledger = json.loads(sql("SELECT jsonb_agg(to_jsonb(m) ORDER BY filename) FROM schema_migrations m"))
        record("migration-ledger-after.json", ledger)
        verify_migration_ledger(
            json.loads((ROOT / "migration-ledger-before.json").read_text()),
            ledger,
            expected,
        )
        assert (
            sql(
                "SELECT indisvalid FROM pg_index WHERE indexrelid='public.idx_usage_logs_upstream_request_id'::regclass"
            )
            == "t"
        )

        run(["git", "switch", "--no-overwrite-ignore", "--detach", META["merge_sha"]])
        write_image("SUB2API_IMAGE", META["new_images"][APP])
        run(
            COMPOSE
            + [
                "up",
                "-d",
                "--no-deps",
                "--no-build",
                "--pull",
                "never",
                "--force-recreate",
                "--timeout",
                "30",
                "sub2api",
            ]
        )
        wait_app()
        dependencies()
        assert containers()[EDGE]["id"] == state()["before"][EDGE]["id"]
        anchors = json.loads((ROOT / "cutover-anchors.json").read_text())
        assert (
            sql(
                "SELECT encode(sha256(convert_to(coalesce(jsonb_agg(jsonb_build_array(id,balance) ORDER BY id)::text,'[]'),'UTF8')),'hex') FROM users"
            )
            == anchors["users_balances"]
        ), "user balances changed before traffic resumed"
        assert int(sql("SELECT coalesce(max(id),0) FROM usage_logs")) == anchors["usage_max_id"], (
            "unexpected new bill before smoke requests"
        )
        phase("backend-verified")
    elif action == "edge":
        assert state()["phase"] == "backend-verified"
        dependencies()
        firewall(True)
        run(
            [
                "sh",
                "deploy/zero-one/safe-edge-switch.sh",
                str(ENV),
                META["new_images"][EDGE],
            ]
        )
        dependencies()
        config_preserved()
        record("caddy-release.json", edge_config())
        gate(edge_config())
        phase("edge-gated")
    elif action == "open":
        assert state()["phase"] == "edge-gated"
        dependencies()
        config_preserved()
        load_config(json.loads((ROOT / "caddy-release.json").read_text()))
        firewall(False)
        healthy()
        phase("observing")
    elif action == "rollback":
        assert STATE.exists()
        before = state()["before"]
        if state()["phase"] in (
            "rolled-back-apps-data-retained",
            "cancelled-before-app-stop",
        ):
            dependencies()
            healthy()
            release_owner()
            print("Application rollback already complete")
            sys.exit(0)
        if (
            state()["phase"] in ("prepared", "waiting-for-websockets")
            and containers()[APP]["status"] == "running"
            and containers()[APP]["image"] == before[APP]["image"]
        ):
            phase("cancelled-before-app-stop")
            release_owner()
            sys.exit(0)
        if (
            state()["phase"] == "draining"
            and containers()[APP]["status"] == "running"
            and containers()[APP]["image"] == before[APP]["image"]
        ):
            load_config(json.loads((ROOT / "caddy-before.json").read_text()))
            firewall(False)
            phase("cancelled-before-app-stop")
            release_owner()
            sys.exit(0)
        if containers()[APP]["status"] == "running":
            if state()["phase"] == "observing":
                gate(edge_config())
            deadline = time.monotonic() + 300
            while slots() > 0 and time.monotonic() < deadline:
                time.sleep(5)
            assert slots() == 0, "refusing rollback while accepted requests remain unsettled"
        current_edge = containers()[EDGE]["image"]
        ENV.write_bytes((ROOT / "environment-before.env").read_bytes())
        ENV.chmod(0o600)
        if current_edge != before[EDGE]["image"]:
            write_image("EDGE_IMAGE", current_edge)
        run(
            [
                "git",
                "switch",
                "--no-overwrite-ignore",
                "--detach",
                META["production_before"],
            ]
        )
        run(
            COMPOSE
            + [
                "up",
                "-d",
                "--no-deps",
                "--no-build",
                "--pull",
                "never",
                "--force-recreate",
                "--timeout",
                "30",
                "sub2api",
            ]
        )
        wait_app()
        if containers()[EDGE]["image"] != before[EDGE]["image"]:
            run(
                [
                    "sh",
                    "deploy/zero-one/safe-edge-switch.sh",
                    str(ENV),
                    before[EDGE]["image"],
                ]
            )
        load_config(json.loads((ROOT / "caddy-before.json").read_text()))
        firewall(False)
        dependencies()
        config_preserved()
        healthy()
        phase("rolled-back-apps-data-retained")
        release_owner()
    elif action == "complete":
        assert state()["phase"] == "observing"
        proof = json.loads((ROOT / "OBSERVATION_30M_COMPLETE.json").read_text())
        assert (
            proof["elapsed_seconds"] >= 1800
            and proof["historical_bills_unchanged"]
            and proof["duplicate_bills"] == 0
            and proof["novel_internal_categories"] == 0
            and proof["known_internal_bursts"] == 0
            and proof["source_sha"] == META["merge_sha"]
        )
        healthy()
        dependencies()
        config_preserved()
        phase("complete")
        release_owner()
    else:
        raise ValueError("Unknown action")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "action",
        choices=[
            "preflight",
            "drain-backup",
            "migrate-backend",
            "edge",
            "open",
            "rollback",
            "watchdog",
            "complete",
        ],
    )
    parser.add_argument("recovery_dir", type=pathlib.Path)
    args = parser.parse_args()
    configure(args.recovery_dir)
    execute(args.action)
