#!/usr/bin/env python3
"""Audit and, only when explicitly requested, reclaim bounded production storage.

The tool deliberately has no volume, bind-mount, database, Redis, environment-file,
or release-lock deletion capability.  Artifact deletion is allowlisted by an
operator-authored policy whose off-host verification and release-reference fields
must both make the file eligible.
"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
from typing import Any, Callable


DEFAULT_ACTIVE_LOCK = Path("/srv/zero-one/.release-backups/.active-upgrade.json")
DEFAULT_DISK_ROOT = Path("/")
MIN_FREE_BYTES = 15 * 1024**3
MAX_USED_PERCENT = 70.0


class MaintenanceError(RuntimeError):
    pass


def command(args: list[str]) -> str:
    return subprocess.run(args, check=True, text=True, capture_output=True).stdout


def load_policy(path: Path) -> dict[str, Any]:
    value = json.loads(path.read_text())
    if not isinstance(value, dict) or value.get("schema_version") != 1:
        raise MaintenanceError("policy must be a schema_version 1 JSON object")
    for key in (
        "target_release_images",
        "rollback_anchor_images",
        "protected_recovery_sets",
        "artifact_candidates",
        "allowed_artifact_roots",
    ):
        if not isinstance(value.get(key), list):
            raise MaintenanceError(f"policy field {key} must be an array")
    if len(value["rollback_anchor_images"]) > 2:
        raise MaintenanceError("policy may retain at most two completed rollback anchors")
    return value


def json_lines(raw: str) -> list[dict[str, Any]]:
    return [json.loads(line) for line in raw.splitlines() if line.strip()]


def image_aliases(image: dict[str, Any]) -> set[str]:
    aliases = {str(image.get("ID", ""))}
    repository = str(image.get("Repository", ""))
    tag = str(image.get("Tag", ""))
    digest = str(image.get("Digest", ""))
    if repository and repository != "<none>" and tag and tag != "<none>":
        aliases.add(f"{repository}:{tag}")
    if repository and repository != "<none>" and digest and digest != "<none>":
        aliases.add(f"{repository}@{digest}")
    return {alias for alias in aliases if alias}


def protected_image_refs(policy: dict[str, Any]) -> set[str]:
    refs = set(map(str, policy["target_release_images"]))
    for anchor in policy["rollback_anchor_images"]:
        if not isinstance(anchor, list):
            raise MaintenanceError("each rollback anchor must be an array of image references")
        refs.update(map(str, anchor))
    return refs


def inspect_images(policy: dict[str, Any], run: Callable[[list[str]], str]) -> dict[str, Any]:
    images = json_lines(run(["docker", "image", "ls", "--no-trunc", "--format", "{{json .}}"] ))
    container_ids = [line.strip() for line in run(["docker", "ps", "-aq"]).splitlines() if line.strip()]
    container_refs: set[str] = set()
    if container_ids:
        inspected = json.loads(run(["docker", "inspect", *container_ids]))
        for container in inspected:
            container_refs.add(str(container.get("Image", "")))
            configured = container.get("Config", {}).get("Image")
            if configured:
                container_refs.add(str(configured))

    protected = protected_image_refs(policy) | container_refs
    candidates = []
    retained = []
    for image in images:
        aliases = image_aliases(image)
        record = {
            "id": image.get("ID"),
            "repository": image.get("Repository"),
            "tag": image.get("Tag"),
            "digest": image.get("Digest"),
            "size": image.get("Size"),
        }
        if aliases & protected:
            retained.append({**record, "reason": "container_or_release_protected"})
        else:
            candidates.append(record)
    return {"protected": retained, "unused_candidates": candidates}


def resolved(path: str) -> Path:
    candidate = Path(path)
    if not candidate.is_absolute():
        raise MaintenanceError(f"artifact path must be absolute: {path}")
    return candidate.resolve(strict=False)


def is_within(path: Path, root: Path) -> bool:
    return path != root and root in path.parents


def inspect_artifacts(policy: dict[str, Any]) -> dict[str, Any]:
    roots = [resolved(str(path)) for path in policy["allowed_artifact_roots"]]
    protected = {resolved(str(path)) for path in policy["protected_recovery_sets"]}
    candidates = []
    refused = []
    for raw in policy["artifact_candidates"]:
        if not isinstance(raw, dict) or not isinstance(raw.get("path"), str):
            raise MaintenanceError("artifact candidate must contain a path")
        path = resolved(raw["path"])
        reasons = []
        if not any(is_within(path, root) for root in roots):
            reasons.append("outside_allowed_roots")
        if any(path == item or is_within(path, item) or is_within(item, path) for item in protected):
            reasons.append("protected_recovery_set")
        if raw.get("offhost_sha256_verified") is not True:
            reasons.append("offhost_verification_missing")
        if raw.get("referenced_by_release") is not False:
            reasons.append("release_reference_present_or_unknown")
        record = {"path": str(path), "exists": path.exists() or path.is_symlink()}
        if reasons:
            refused.append({**record, "reasons": reasons})
        else:
            candidates.append(record)
    return {"deletion_candidates": candidates, "refused": refused}


def disk_status(root: Path) -> dict[str, Any]:
    usage = shutil.disk_usage(root)
    used_percent = round((usage.used / usage.total) * 100, 2)
    return {
        "path": str(root),
        "total_bytes": usage.total,
        "used_bytes": usage.used,
        "free_bytes": usage.free,
        "used_percent": used_percent,
        "passes_release_gate": used_percent < MAX_USED_PERCENT and usage.free >= MIN_FREE_BYTES,
    }


def audit(
    policy: dict[str, Any],
    active_lock: Path,
    disk_root: Path,
    run: Callable[[list[str]], str] = command,
) -> dict[str, Any]:
    return {
        "schema_version": 1,
        "mode": "dry-run",
        "active_upgrade_lock": {"path": str(active_lock), "present": active_lock.exists()},
        "disk_before": disk_status(disk_root),
        "docker": inspect_images(policy, run),
        "artifacts": inspect_artifacts(policy),
        "journal_policy": {"max_size": "1G", "max_age": "14d"},
        "build_cache": {"candidate": "all", "reason": "production_builds_forbidden"},
        "excluded_targets": [
            "docker_volumes",
            "bind_mounts",
            "environment_files",
            "redis",
            "postgresql",
            "release_lock",
        ],
    }


def delete_artifact(path: Path) -> None:
    if path.is_symlink() or path.is_file():
        path.unlink(missing_ok=True)
    elif path.is_dir():
        shutil.rmtree(path)


def apply_plan(
    report: dict[str, Any],
    active_lock: Path,
    disk_root: Path,
    run: Callable[[list[str]], str] = command,
) -> dict[str, Any]:
    if active_lock.exists():
        raise MaintenanceError(f"active upgrade lock exists: {active_lock}")

    actions = []
    run(["docker", "builder", "prune", "--all", "--force"])
    actions.append({"action": "docker_builder_prune", "status": "completed"})
    for image in report["docker"]["unused_candidates"]:
        run(["docker", "image", "rm", str(image["id"])])
        actions.append({"action": "docker_image_rm", "id": image["id"], "status": "completed"})
    for artifact in report["artifacts"]["deletion_candidates"]:
        delete_artifact(Path(artifact["path"]))
        actions.append({"action": "delete_verified_artifact", "path": artifact["path"], "status": "completed"})
    run(["journalctl", "--vacuum-size=1G", "--vacuum-time=14d"])
    actions.append({"action": "journal_vacuum", "status": "completed"})

    result = {
        **report,
        "mode": "apply",
        "actions": actions,
        "disk_after": disk_status(disk_root),
    }
    if not result["disk_after"]["passes_release_gate"]:
        raise MaintenanceError(json.dumps(result, sort_keys=True))
    return result


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", nargs="?", choices=("audit", "apply"), default="audit")
    parser.add_argument("--policy", type=Path, required=True)
    parser.add_argument("--active-lock", type=Path, default=DEFAULT_ACTIVE_LOCK)
    parser.add_argument("--disk-root", type=Path, default=DEFAULT_DISK_ROOT)
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv or sys.argv[1:])
    try:
        policy = load_policy(args.policy)
        report = audit(policy, args.active_lock, args.disk_root)
        if args.mode == "apply":
            report = apply_plan(report, args.active_lock, args.disk_root)
        print(json.dumps(report, indent=2, sort_keys=True))
        return 0
    except (MaintenanceError, subprocess.CalledProcessError, OSError, json.JSONDecodeError) as exc:
        print(json.dumps({"error": str(exc), "mode": args.mode}, sort_keys=True), file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
