"""Authenticated release probes using a dedicated identity and keys supplied outside Git."""

import argparse
import base64
import hashlib
import json
from pathlib import Path
import subprocess
import time


def request(path, bearer, probe, body=None):
    config = [
        "header = " + json.dumps("Authorization: Bearer " + bearer),
        'header = "Content-Type: application/json"',
        "header = " + json.dumps("X-Zero-One-Maintenance-Probe: " + probe),
    ]
    if body is not None:
        config.append("data = " + json.dumps(json.dumps(body)))
    result = subprocess.run(
        [
            "curl",
            "--silent",
            "--show-error",
            "--max-time",
            "180",
            "--resolve",
            "api.01yapi.com:443:127.0.0.1",
            "--config",
            "-",
            "--write-out",
            "\n%{http_code}",
            "https://api.01yapi.com" + path,
        ],
        input="\n".join(config),
        text=True,
        capture_output=True,
        check=True,
    )
    payload, status = result.stdout.rsplit("\n", 1)
    return int(status), payload


def verify_response(endpoint, text):
    if endpoint == "/v1/responses":
        events = [
            json.loads(line[6:]) for line in text.splitlines() if line.startswith("data: ") and line[6:] != "[DONE]"
        ]
        types = {event.get("type") for event in events}
        if not {"response.output_text.delta", "response.completed"}.issubset(types):
            raise ValueError("stream lacks semantic output or successful completion")
        if not any(
            event.get("type") == "response.output_text.delta" and isinstance(event.get("delta"), str) and event["delta"]
            for event in events
        ):
            raise ValueError("stream contains no output text")
        if types.intersection({"error", "response.failed", "response.incomplete"}):
            raise ValueError("stream reported a failure")
    elif endpoint == "/v1/images/generations":
        data = json.loads(text)
        if data.get("error") or len(data.get("data", [])) != 1:
            raise ValueError("image request did not produce exactly one image")
        image = data["data"][0]
        if image.get("b64_json"):
            if len(base64.b64decode(image["b64_json"], validate=True)) <= 100:
                raise ValueError("image payload is empty")
        elif not str(image.get("url", "")).startswith("https://"):
            raise ValueError("image result has no valid payload")
    else:
        raise ValueError("unsupported release probe endpoint")


def sql(query):
    return subprocess.check_output(
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
        input=query,
        text=True,
    ).strip()


def positive_id(value):
    if not isinstance(value, int) or isinstance(value, bool) or value <= 0:
        raise ValueError("a dedicated numeric identity is required")
    return value


def invoice_count(key_id):
    query = "SELECT count(*)::text || '|' || count(DISTINCT request_id)::text FROM usage_logs WHERE api_key_id=" + str(
        positive_id(key_id)
    )
    return tuple(map(int, sql(query).split("|")))


def verify_probe_key(case, user_id):
    if case["endpoint"] not in ("/v1/responses", "/v1/images/generations"):
        raise ValueError("unsupported release probe endpoint")
    key_id, user_id = positive_id(case["key_id"]), positive_id(user_id)
    fingerprint = hashlib.sha256(case["key"].encode()).hexdigest()
    query = (
        f"SELECT count(*) FROM api_keys WHERE id={key_id} AND user_id={user_id} "
        "AND name LIKE 'release-%' AND deleted_at IS NULL AND status='active' "
        "AND quota>0 AND quota<=1 AND quota_used=0 AND expires_at>NOW() "
        "AND expires_at<=NOW()+INTERVAL '2 days' "
        f"AND encode(sha256(convert_to(key,'UTF8')),'hex')='{fingerprint}'"
    )
    if sql(query) != "1":
        raise ValueError(
            "probe key must belong to the dedicated identity, have a release name, short expiry and limited quota"
        )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("recovery_dir", type=Path)
    parser.add_argument("mode", choices=["read", "model"])
    args = parser.parse_args()
    root = args.recovery_dir.resolve()
    metadata = json.loads((root / "release-metadata.json").read_text())
    fixture = json.loads((root / "smoke-identity.json").read_text())
    status, payload = request("/api/v1/auth/me", fixture["token"], metadata["probe_secret"])
    if status != 200 or json.loads(payload).get("data", {}).get("id") != fixture["user_id"]:
        raise ValueError("dedicated release identity did not authenticate")
    if not str(json.loads(payload)["data"].get("username", "")).startswith("release-"):
        raise ValueError("dedicated identity username must start with release-")
    result = {"source_sha": metadata["merge_sha"], "identity_verified": True, "probes": []}
    if args.mode == "read":
        for path in ("/health", "/api/v1/settings/public"):
            status, _ = request(path, "", metadata["probe_secret"])
            if status != 200:
                raise ValueError("release read probe failed: " + path)
        result["public_reads"] = True
    else:
        for case in fixture["model_probes"]:
            verify_probe_key(case, fixture["user_id"])
            if invoice_count(case["key_id"]) != (0, 0):
                raise ValueError("release probes require a fresh dedicated API Key")
            status, payload = request(case["endpoint"], case["key"], metadata["probe_secret"], case["body"])
            if status != 200:
                raise ValueError("model probe failed with HTTP " + str(status))
            verify_response(case["endpoint"], payload)
            for _ in range(45):
                count = invoice_count(case["key_id"])
                if count != (0, 0):
                    break
                time.sleep(1)
            if count != (1, 1):
                raise ValueError("model probe did not settle exactly once")
            result["probes"].append({"endpoint": case["endpoint"], "one_invoice": True})
        if {case["endpoint"] for case in result["probes"]} != {"/v1/responses", "/v1/images/generations"}:
            raise ValueError("both stream and image probes are required")
    (root / ("production-" + args.mode + "-smoke.json")).write_text(json.dumps(result, indent=2))
    print(json.dumps(result))


if __name__ == "__main__":
    import os

    os.umask(0o077)
    main()
