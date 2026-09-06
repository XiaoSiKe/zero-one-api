"""Read-only daily-backup readiness check. Does not substitute for a restore drill."""

import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import time


def verify_backup(root, now):
    sentinel = root / ".offsite-mounted"
    if not os.path.ismount(root) or not sentinel.is_file() or sentinel.is_symlink():
        raise ValueError("off-host mount and safe sentinel are required")
    record = json.loads((root / ".last-success.json").read_text())
    age = now - record["completed_at_epoch"]
    if age < 0 or age > 26 * 3600:
        raise ValueError("last successful daily backup is older than 26 hours")
    for key in ("postgres", "state"):
        name = record[key]
        if Path(name).name != name or not name.endswith(".age"):
            raise ValueError("unsafe backup filename")
        archive = root / "daily" / name
        if archive.is_symlink() or not archive.is_file() or archive.stat().st_size == 0:
            raise ValueError("encrypted archive is missing or unsafe")
        checksum = archive.with_name(name + ".sha256")
        if checksum.is_symlink():
            raise ValueError("unsafe checksum file")
        expected, expected_name = checksum.read_text().strip().split(maxsplit=1)
        if expected_name.lstrip(" *") != name:
            raise ValueError("checksum does not identify its archive")
        with archive.open("rb") as stream:
            digest = hashlib.sha256()
            for chunk in iter(lambda: stream.read(1024 * 1024), b""):
                digest.update(chunk)
            actual = digest.hexdigest()
        if actual != expected:
            raise ValueError("encrypted archive checksum mismatch")
    return {"sha256_verified": True, "age_seconds": int(age)}


def _regular_file(path, label):
    if path.is_symlink() or not path.is_file():
        raise ValueError(f"{label} must be a regular file")


def verify_signed_receipt(receipt_path, signature_path, public_key_path, now, expected_source, expected_snapshot):
    for path, label in (
        (receipt_path, "receipt"),
        (signature_path, "receipt signature"),
        (public_key_path, "receipt public key"),
    ):
        _regular_file(path, label)
    subprocess.run(
        [
            "openssl",
            "dgst",
            "-sha256",
            "-verify",
            str(public_key_path),
            "-signature",
            str(signature_path),
            str(receipt_path),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    receipt = json.loads(receipt_path.read_text())
    if receipt.get("schema_version") != 1 or receipt.get("storage_provider") != "google_drive":
        raise ValueError("unsupported signed backup receipt")
    completed = receipt.get("completed_at_epoch")
    if not isinstance(completed, int) or isinstance(completed, bool):
        raise ValueError("signed backup receipt has no valid completion time")
    age = now - completed
    if age < 0 or age > 26 * 3600:
        raise ValueError("signed backup receipt is older than 26 hours")
    source = receipt.get("source_sha")
    snapshot = receipt.get("snapshot_id")
    if not isinstance(source, str) or not re.fullmatch(r"[0-9a-f]{40}", source):
        raise ValueError("signed backup receipt has no valid source SHA")
    if not isinstance(snapshot, str) or not re.fullmatch(r"[A-Za-z0-9._-]+", snapshot):
        raise ValueError("signed backup receipt has no safe snapshot ID")
    if source != expected_source or snapshot != expected_snapshot:
        raise ValueError("signed backup receipt belongs to another release")
    if not re.fullmatch(r"[A-Za-z0-9_-]{10,}", str(receipt.get("folder_id", ""))):
        raise ValueError("signed backup receipt has no valid Drive folder")
    files = receipt.get("files")
    if not isinstance(files, list):
        raise ValueError("signed backup receipt has no file inventory")
    by_name = {item.get("name"): item for item in files if isinstance(item, dict)}
    required = {"postgres.dump.age", "deployment-state.tar.gz.age", "offhost-upload-manifest.json"}
    if set(by_name) != required:
        raise ValueError("signed backup receipt file inventory is incomplete")
    for name, item in by_name.items():
        if Path(name).name != name or item.get("private") is not True or item.get("can_download") is not True:
            raise ValueError("signed backup receipt contains an unsafe file record")
        if not isinstance(item.get("size"), int) or isinstance(item["size"], bool) or item["size"] <= 0:
            raise ValueError("signed backup receipt contains an invalid file size")
        if not re.fullmatch(r"[0-9a-f]{64}", str(item.get("sha256", ""))):
            raise ValueError("signed backup receipt contains an invalid checksum")
        if not re.fullmatch(r"[A-Za-z0-9_-]{10,}", str(item.get("drive_file_id", ""))):
            raise ValueError("signed backup receipt contains an invalid Drive file ID")
    restored = receipt.get("restore")
    if not isinstance(restored, dict) or restored.get("postgres_dump_restored") is not True:
        raise ValueError("signed backup receipt lacks an actual restore")
    if restored.get("original_business_columns_unchanged") is not True:
        raise ValueError("signed backup receipt lacks data-integrity verification")
    for field in ("original_tables", "serial_sequences_checked"):
        value = restored.get(field)
        if not isinstance(value, int) or isinstance(value, bool) or value <= 0:
            raise ValueError(f"signed backup receipt has invalid {field}")
    schedule = receipt.get("schedule")
    if not isinstance(schedule, dict) or schedule.get("status") != "ACTIVE":
        raise ValueError("signed backup receipt lacks an active schedule")
    if not re.fullmatch(r"[A-Za-z0-9._-]+", str(schedule.get("automation_id", ""))):
        raise ValueError("signed backup receipt has no valid schedule identity")
    return {
        "sha256_verified": True,
        "restore_verified": True,
        "scheduled_backup_healthy": True,
        "age_seconds": int(age),
        "storage_provider": "google_drive",
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("backup_dir", type=Path, nargs="?")
    parser.add_argument("--receipt", type=Path)
    parser.add_argument("--signature", type=Path)
    parser.add_argument("--public-key", type=Path)
    parser.add_argument("--expected-source")
    parser.add_argument("--expected-snapshot")
    args = parser.parse_args()
    try:
        signed = any(
            value is not None
            for value in (
                args.receipt,
                args.signature,
                args.public_key,
                args.expected_source,
                args.expected_snapshot,
            )
        )
        if signed:
            if args.backup_dir is not None or any(
                value is None
                for value in (
                    args.receipt,
                    args.signature,
                    args.public_key,
                    args.expected_source,
                    args.expected_snapshot,
                )
            ):
                raise ValueError("signed receipt verification requires all receipt arguments and no backup directory")
            result = verify_signed_receipt(
                args.receipt,
                args.signature,
                args.public_key,
                time.time(),
                args.expected_source,
                args.expected_snapshot,
            )
        else:
            if args.backup_dir is None:
                raise ValueError("backup directory or signed receipt is required")
            result = verify_backup(args.backup_dir, time.time())
            for state in ("is-enabled", "is-active"):
                subprocess.run(["systemctl", state, "--quiet", "zero-one-backup.timer"], check=True)
            status = subprocess.check_output(
                [
                    "systemctl",
                    "show",
                    "zero-one-backup.service",
                    "--property=Result",
                    "--value",
                ],
                text=True,
            ).strip()
            if status != "success":
                raise ValueError("latest scheduled backup failed")
            result = {**result, "scheduled_backup_healthy": True, "storage_provider": "mounted_filesystem"}
        print(json.dumps(result))
    except (
        OSError,
        ValueError,
        KeyError,
        TypeError,
        subprocess.CalledProcessError,
    ) as error:
        parser.exit(1, f"backup readiness failed: {error}\n")


if __name__ == "__main__":
    main()
