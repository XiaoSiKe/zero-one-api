"""Exercise release/backup failure boundaries without production access."""

import copy
import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch


def load(name):
    spec = importlib.util.spec_from_file_location(name, Path(__file__).with_name(name + ".py"))
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


release = load("release-control")
backup = load("backup-health")
smoke = load("release-smoke")


class ReleaseTests(unittest.TestCase):
    def metadata(self):
        images = {
            f"zero-one-api-{name}-1": f"ghcr.io/xiaosike/zero-one-{name}@sha256:" + "a" * 64
            for name in ("sub2api", "edge")
        }
        return {
            "id": "fixture",
            "merge_sha": "a" * 40,
            "production_before": "b" * 40,
            "new_images": images,
            "old_images": images.copy(),
            "expected_migrations": [],
            "probe_secret": "c" * 32,
        }

    def test_rejects_mutable_images_and_wrong_recovery_directory(self):
        meta = self.metadata()
        root = Path("/srv/zero-one/.release-backups/fixture")
        release.validate_metadata(meta, root)
        with self.assertRaises(ValueError):
            release.validate_metadata(meta, Path("/tmp/fixture"))
        meta["new_images"]["zero-one-api-edge-1"] = "ghcr.io/xiaosike/zero-one-edge:latest"
        with self.assertRaises(ValueError):
            release.validate_metadata(meta, root)

    def test_only_authorized_derived_cursor_columns_are_excluded(self):
        columns = {
            "users": ["id", "balance", "updated_at"],
            "channel_monitor_v2_watermarks": [
                "id",
                "backfill_cursor",
                "updated_at",
                "last_aggregated_at",
            ],
        }
        original = copy.deepcopy(columns)
        self.assertEqual(release.migration_projection(columns, []), original)
        projection = release.migration_projection(columns, ["235_channel_monitor_v2_taxonomy_v2_backfill.sql"])
        self.assertEqual(projection["users"], original["users"])
        self.assertEqual(projection["channel_monitor_v2_watermarks"], ["id", "last_aggregated_at"])
        self.assertEqual(columns, original)

    def test_rejects_rewritten_or_unexpected_migration_ledger(self):
        before = [{"filename": "001_a.sql", "checksum": "a", "applied_at": "original"}]
        added = {"filename": "002_b.sql", "checksum": "b", "applied_at": "later"}
        release.verify_migration_ledger(before, before + [added], {"002_b.sql"})
        for after in (
            [{**before[0], "checksum": "changed"}, added],
            before,
            before + [added, {**added, "filename": "003_c.sql"}],
        ):
            with self.assertRaises(AssertionError):
                release.verify_migration_ledger(before, after, {"002_b.sql"})

    def test_wrong_phase_cannot_change_images(self):
        with (
            patch.object(release, "state", return_value={"phase": "complete"}),
            patch.object(release, "run") as run,
        ):
            for action in ("migrate-backend", "edge", "open"):
                with self.assertRaises(AssertionError):
                    release.execute(action)
            run.assert_not_called()

    def test_watchdog_leaves_completed_release_alone(self):
        with tempfile.TemporaryDirectory() as temp:
            state = Path(temp) / "state.json"
            state.write_text("{}")
            with (
                patch.object(release, "STATE", state, create=True),
                patch.object(release, "state", return_value={"phase": "complete"}),
                patch.object(release, "run") as run,
            ):
                with self.assertRaises(SystemExit) as result:
                    release.execute("watchdog")
                self.assertEqual(result.exception.code, 0)
                run.assert_not_called()


class BackupTests(unittest.TestCase):
    def test_requires_mount_recent_receipt_and_matching_archives(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            (root / "daily").mkdir()
            (root / ".offsite-mounted").touch()
            record = {
                "completed_at_epoch": 100,
                "postgres": "db.age",
                "state": "state.age",
            }
            (root / ".last-success.json").write_text(json.dumps(record))
            for name in ("db.age", "state.age"):
                (root / "daily" / name).write_bytes(b"encrypted fixture")
                digest = hashlib.sha256(b"encrypted fixture").hexdigest()
                (root / "daily" / (name + ".sha256")).write_text(f"{digest}  {name}\n")
            with self.assertRaises(ValueError):
                backup.verify_backup(root, 101)
            with patch.object(backup.os.path, "ismount", return_value=True):
                self.assertTrue(backup.verify_backup(root, 101)["sha256_verified"])
                with self.assertRaises(ValueError):
                    backup.verify_backup(root, 100 + 27 * 3600)
                (root / "daily" / "db.age").write_bytes(b"corrupt")
                with self.assertRaises(ValueError):
                    backup.verify_backup(root, 101)


class SmokeTests(unittest.TestCase):
    def test_stream_must_complete_with_content(self):
        good = 'data: {"type":"response.output_text.delta","delta":"OK"}\n\ndata: {"type":"response.completed"}\n'
        smoke.verify_response("/v1/responses", good)
        for payload in (
            'data: {"type":"response.completed"}\n',
            good.replace('"OK"', '""'),
            good + 'data: {"type":"response.failed"}\n',
        ):
            with self.assertRaises(ValueError):
                smoke.verify_response("/v1/responses", payload)

    def test_rejects_false_image_success_and_unsafe_key_ids(self):
        for payload in ("{}", '{"data":[{}]}', '{"error":"failed","data":[]}'):
            with self.assertRaises(ValueError):
                smoke.verify_response("/v1/images/generations", payload)
        with patch.object(smoke.subprocess, "check_output") as command:
            for key in (0, -1, True, "1; DROP TABLE users"):
                with self.assertRaises(ValueError):
                    smoke.invoice_count(key)
            command.assert_not_called()


if __name__ == "__main__":
    unittest.main()
