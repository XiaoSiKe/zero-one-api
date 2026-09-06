"""Exercise release/backup failure boundaries without production access."""

import copy
import hashlib
import importlib.util
import json
from pathlib import Path
import subprocess
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
observation = load("release_observation_policy")


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

    def test_signed_backup_health_command_is_release_bound(self):
        recovery = Path("/srv/zero-one/.release-backups/fixture")
        with (
            patch.object(release, "ROOT", recovery, create=True),
            patch.object(release, "META", {"merge_sha": "a" * 40, "id": "fixture"}, create=True),
        ):
            command = release.backup_health_command(
                {
                    "mode": "signed_receipt",
                    "receipt": "backup-receipt.json",
                    "signature": "backup-receipt.sig",
                    "public_key": "/etc/zero-one/backup-receipt.pub",
                }
            )
            self.assertIn(str(recovery / "backup-receipt.json"), command)
            self.assertIn("a" * 40, command)
            self.assertIn("fixture", command)
            with self.assertRaises(ValueError):
                release.backup_health_command(
                    {
                        "mode": "signed_receipt",
                        "receipt": "../other-release.json",
                        "signature": "backup-receipt.sig",
                        "public_key": "/etc/zero-one/backup-receipt.pub",
                    }
                )


class BackupTests(unittest.TestCase):
    def receipt(self):
        return {
            "schema_version": 1,
            "completed_at_epoch": 100,
            "source_sha": "a" * 40,
            "snapshot_id": "fixture",
            "storage_provider": "google_drive",
            "folder_id": "folder_123456789",
            "files": [
                {
                    "name": name,
                    "size": 100,
                    "sha256": "b" * 64,
                    "drive_file_id": "file_123456789_" + str(index),
                    "private": True,
                    "can_download": True,
                }
                for index, name in enumerate(
                    ("postgres.dump.age", "deployment-state.tar.gz.age", "offhost-upload-manifest.json")
                )
            ],
            "restore": {
                "postgres_dump_restored": True,
                "original_business_columns_unchanged": True,
                "original_tables": 99,
                "serial_sequences_checked": 72,
            },
            "schedule": {"status": "ACTIVE", "automation_id": "daily-backup"},
        }

    def sign(self, root, receipt):
        private_key = root / "private.pem"
        public_key = root / "public.pem"
        receipt_path = root / "receipt.json"
        signature = root / "receipt.sig"
        subprocess.run(
            [
                "openssl",
                "genpkey",
                "-algorithm",
                "RSA",
                "-pkeyopt",
                "rsa_keygen_bits:3072",
                "-out",
                private_key,
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        subprocess.run(["openssl", "pkey", "-in", private_key, "-pubout", "-out", public_key], check=True)
        receipt_path.write_text(json.dumps(receipt, sort_keys=True, separators=(",", ":")))
        subprocess.run(
            [
                "openssl",
                "dgst",
                "-sha256",
                "-sign",
                private_key,
                "-out",
                signature,
                receipt_path,
            ],
            check=True,
        )
        return receipt_path, signature, public_key

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

    def test_signed_receipt_requires_valid_signature_release_and_restore(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            receipt = self.receipt()
            receipt_path, signature, public_key = self.sign(root, receipt)
            result = backup.verify_signed_receipt(receipt_path, signature, public_key, 101, "a" * 40, "fixture")
            self.assertTrue(result["restore_verified"])
            self.assertEqual(result["storage_provider"], "google_drive")
            with self.assertRaises(ValueError):
                backup.verify_signed_receipt(receipt_path, signature, public_key, 101, "c" * 40, "fixture")
            receipt_path.write_text(receipt_path.read_text() + " ")
            with self.assertRaises(subprocess.CalledProcessError):
                backup.verify_signed_receipt(receipt_path, signature, public_key, 101, "a" * 40, "fixture")


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


class ObservationTests(unittest.TestCase):
    def test_known_sparse_internal_error_is_observed_without_false_rollback(self):
        result = observation.classify_internal_taxonomy(
            [{"signature": "gateway|service-unavailable", "count": 141}],
            [{"signature": "gateway|service-unavailable", "count": 1}],
            11 * 60,
        )
        self.assertEqual(result, {"novel": [], "bursts": []})

    def test_novel_taxonomy_and_known_burst_still_block_release(self):
        result = observation.classify_internal_taxonomy(
            [{"signature": "known", "count": 141}],
            [{"signature": "known", "count": 5}, {"signature": "new", "count": 1}],
            10 * 60,
        )
        self.assertEqual([row["signature"] for row in result["novel"]], ["new"])
        self.assertEqual([row["signature"] for row in result["bursts"]], ["known"])


if __name__ == "__main__":
    unittest.main()
