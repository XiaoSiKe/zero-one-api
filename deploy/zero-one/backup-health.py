"""Read-only daily-backup readiness check. Does not substitute for a restore drill."""

import argparse
import hashlib
import json
import os
from pathlib import Path
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


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("backup_dir", type=Path)
    args = parser.parse_args()
    try:
        result = verify_backup(args.backup_dir, time.time())
        for state in ("is-enabled", "is-active"):
            subprocess.run(
                ["systemctl", state, "--quiet", "zero-one-backup.timer"], check=True
            )
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
        print(json.dumps({**result, "scheduled_backup_healthy": True}))
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
