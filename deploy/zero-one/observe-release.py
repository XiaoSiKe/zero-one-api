"""Observe a released image pair for 30 minutes; credentials stay in its private recovery directory."""

import json, pathlib, subprocess, time, datetime, os, sys

from release_observation_policy import classify_internal_taxonomy

if not __debug__:
    raise RuntimeError("observation requires assertions")
os.umask(0o077)
root = pathlib.Path(sys.argv[1]).resolve()
meta = json.loads((root / "release-metadata.json").read_text())
state = json.loads((root / "cutover-state.json").read_text())
assert state["phase"] == "observing"
assert root.parent.name == ".release-backups" and root.name == meta["id"]
start = state["time"]
begin = time.monotonic()
log = (root / "observation-private.log").open("a")
columns = json.loads((root / "cutover-original-columns.json").read_text())["usage_logs"]
anchor = json.loads((root / "cutover-anchors.json").read_text())["usage_max_id"]
expected = next(
    x for x in json.loads((root / "cutover-before-fingerprints.json").read_text()) if x["table"] == "usage_logs"
)


def run(a, stdin=None):
    return subprocess.check_output(a, input=stdin, text=True, stderr=log).strip()


def sql(q):
    return run(
        [
            "docker",
            "exec",
            "-i",
            "zero-one-api-postgres-1",
            "psql",
            "-X",
            "-qAt",
            "-U",
            "sub2api",
            "-d",
            "sub2api",
            "-v",
            "ON_ERROR_STOP=1",
        ],
        "SET TIME ZONE 'UTC';\n" + q,
    )


def old_bills():
    cols = ",".join('"' + x.replace('"', '""') + '"' for x in columns)
    actual = json.loads(
        sql(
            f"WITH h AS (SELECT encode(sha256(convert_to(to_jsonb(t)::text,'UTF8')),'hex') v FROM (SELECT {cols} FROM usage_logs WHERE id<={anchor}) t) SELECT jsonb_build_object('table','usage_logs','rows',count(*),'digest',encode(sha256(convert_to(coalesce(string_agg(v,'' ORDER BY v),''),'UTF8')),'hex')) FROM h"
        )
    )
    assert expected == actual, "historical invoice rows changed after application upgrade"


def internal_taxonomy(window_start, window_end=None):
    end = "" if window_end is None else " AND created_at<'" + window_end + "'::timestamptz"
    source = sql(
        "SELECT coalesce(jsonb_agg(row),'[]') FROM ("
        "SELECT jsonb_build_object('signature',concat_ws('|',error_phase,error_owner,error_source,error_type,status_code),"
        "'count',count(*)) row FROM ops_error_logs WHERE error_phase='internal' AND created_at>='"
        + window_start
        + "'::timestamptz"
        + end
        + " GROUP BY error_phase,error_owner,error_source,error_type,status_code) grouped"
    )
    return json.loads(source)


old_bills()
samples = []
baseline_start = (datetime.datetime.fromisoformat(start) - datetime.timedelta(days=7)).isoformat()
baseline_internal = internal_taxonomy(baseline_start, start)
initial_apps = {x["Name"].lstrip("/"): x["Id"] for x in json.loads(run(["docker", "inspect", *meta["new_images"]]))}
while True:
    containers = {x["Name"].lstrip("/"): x for x in json.loads(run(["docker", "inspect", *state["before"]]))}
    for name, c in containers.items():
        assert c["State"]["Health"]["Status"] == "healthy", name + " unhealthy"
        assert sorted(c["Mounts"], key=lambda m: m["Destination"]) == state["before"][name]["mounts"], (
            name + " mounts changed"
        )
        if name in meta["new_images"]:
            assert c["Config"]["Image"] == meta["new_images"][name] and c["Id"] == initial_apps[name]
            assert c["RestartCount"] == 0, name + " restarted during observation"
        else:
            assert c["Id"] == state["before"][name]["id"], name + " was replaced"
    assert run(
        [
            "curl",
            "-fsS",
            "--max-time",
            "10",
            "--resolve",
            "api.01yapi.com:443:127.0.0.1",
            "https://api.01yapi.com/health",
        ]
    )
    assert run(["systemctl", "is-active", "01yapi-bridge-client.service"]) == "active"
    assert run(
        [
            "docker",
            "exec",
            "zero-one-api-sub2api-1",
            "wget",
            "-q",
            "-T",
            "5",
            "-O",
            "-",
            "http://superapi-direct:18181/health",
        ]
    )
    data = json.loads(
        sql(
            "SELECT jsonb_build_object('requests',count(*),'confirmed_upstream_costs',count(upstream_rate_multiplier),'first_token_p50_ms',percentile_disc(.5) WITHIN GROUP (ORDER BY first_token_ms),'first_token_p90_ms',percentile_disc(.9) WITHIN GROUP (ORDER BY first_token_ms)) FROM usage_logs WHERE created_at>='"
            + start
            + "'::timestamptz"
        )
    )
    errors = json.loads(
        sql(
            "SELECT jsonb_build_object('internal',count(*) FILTER (WHERE error_phase='internal'),'provider_5xx',count(*) FILTER (WHERE error_owner='provider' AND coalesce(upstream_status_code,status_code)>=500),'platform_5xx',count(*) FILTER (WHERE error_owner='platform' AND status_code>=500)) FROM ops_error_logs WHERE created_at>='"
            + start
            + "'::timestamptz"
        )
    )
    dup = sql(
        "SELECT count(*) FROM (SELECT request_id,api_key_id FROM usage_logs WHERE id>"
        + str(anchor)
        + " AND request_id<>'' GROUP BY request_id,api_key_id HAVING count(*)>1) t"
    )
    assert dup == "0", "duplicate invoice identities found"
    elapsed = int(time.monotonic() - begin)
    internal = classify_internal_taxonomy(baseline_internal, internal_taxonomy(start), elapsed)
    assert not internal["novel"], "new internal error taxonomy requires investigation"
    assert not internal["bursts"], "known internal error taxonomy increased sharply"
    runtime_logs = subprocess.check_output(
        ["docker", "logs", "--since", start, "zero-one-api-sub2api-1"], text=True, stderr=subprocess.STDOUT
    ).lower()
    assert not any(
        x in runtime_logs
        for x in [
            "record_usage_failed",
            "usage_record.task_dropped",
            "usage_record.task_panic",
            "panic:",
            "fatal error:",
        ]
    ), "new billing/runtime failure requires immediate investigation"
    sample = {
        "at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "elapsed_seconds": elapsed,
        "health": "passed",
        "data": data,
        "errors": errors,
        "internal_taxonomy": {
            "novel_categories": len(internal["novel"]),
            "burst_categories": len(internal["bursts"]),
        },
    }
    samples.append(sample)
    (root / "observation-samples.json").write_text(json.dumps(samples, indent=2))
    print(
        json.dumps(
            {
                "elapsed_seconds": elapsed,
                "health": "passed",
                "requests": data["requests"],
                "internal_errors": errors["internal"],
                "provider_5xx": errors["provider_5xx"],
            }
        ),
        flush=True,
    )
    if elapsed >= 1800:
        break
    time.sleep(60)
old_bills()
# Billing persistence failures are not equivalent to expected upstream errors.
logs = subprocess.check_output(
    ["docker", "logs", "--since", start, "zero-one-api-sub2api-1"], text=True, stderr=subprocess.STDOUT
)
patterns = [
    "record_usage_failed",
    "usage_record.task_dropped",
    "usage_record.task_panic",
    "usage record worker pool overloaded",
    "usage log create failed",
    "record usage failed",
    "billing apply failed",
    "failed to apply billing",
    "panic:",
    "fatal error:",
]
issues = {p: logs.lower().count(p) for p in patterns if p in logs.lower()}
assert not issues, "billing/runtime log anomalies require investigation"
(root / "OBSERVATION_30M_COMPLETE.json").write_text(
    json.dumps(
        {
            "source_sha": meta["merge_sha"],
            "image_digests": meta["new_images"],
            "start": start,
            "end": samples[-1]["at"],
            "elapsed_seconds": samples[-1]["elapsed_seconds"],
            "samples": len(samples),
            "historical_bills_unchanged": True,
            "duplicate_bills": 0,
            "internal_errors": samples[-1]["errors"]["internal"],
            "novel_internal_categories": samples[-1]["internal_taxonomy"]["novel_categories"],
            "known_internal_bursts": samples[-1]["internal_taxonomy"]["burst_categories"],
            "billing_log_anomalies": issues,
            "provider_5xx": samples[-1]["errors"]["provider_5xx"],
            "last_metrics": samples[-1]["data"],
        },
        indent=2,
    )
)
print("Thirty-minute observation finished with historical invoice fingerprints unchanged.", flush=True)
