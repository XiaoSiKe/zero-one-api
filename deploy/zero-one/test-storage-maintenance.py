import importlib.util
import json
from pathlib import Path
import shutil
import tempfile
import unittest
from unittest.mock import patch


def load_module():
    path = Path(__file__).with_name("storage-maintenance.py")
    spec = importlib.util.spec_from_file_location("storage_maintenance", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


maintenance = load_module()


class StorageMaintenanceTests(unittest.TestCase):
    def policy(self, root: Path):
        return {
            "schema_version": 1,
            "target_release_images": ["registry/backend@sha256:target"],
            "rollback_anchor_images": [["registry/backend@sha256:anchor"]],
            "protected_recovery_sets": [str(root / "current")],
            "allowed_artifact_roots": [str(root)],
            "artifact_candidates": [],
        }

    def runner(self, calls):
        images = [
            {"ID": "sha256:running", "Repository": "registry/backend", "Tag": "old", "Digest": "sha256:old", "Size": "1GB"},
            {"ID": "sha256:target-id", "Repository": "registry/backend", "Tag": "new", "Digest": "sha256:target", "Size": "1GB"},
            {"ID": "sha256:anchor", "Repository": "registry/backend", "Tag": "<none>", "Digest": "", "Size": "1GB"},
            {"ID": "sha256:unused", "Repository": "registry/backend", "Tag": "unused", "Digest": "sha256:unused", "Size": "1GB"},
            {"ID": "sha256:unused", "Repository": "registry/backend", "Tag": "unused-alias", "Digest": "<none>", "Size": "1GB"},
        ]

        def run(args):
            calls.append(args)
            if args[:3] == ["docker", "image", "ls"]:
                return "\n".join(json.dumps(item) for item in images)
            if args == ["docker", "ps", "-aq"]:
                return "container-one\n"
            if args[:2] == ["docker", "inspect"]:
                return json.dumps([{"Image": "sha256:running", "Config": {"Image": "registry/backend:old"}}])
            return ""

        return run

    def test_audit_is_dry_run_and_protects_running_target_and_anchors(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            calls = []
            with patch.object(maintenance, "disk_status", return_value={"passes_release_gate": False}):
                report = maintenance.audit(self.policy(root), root / "lock", root, self.runner(calls))
            self.assertEqual(report["mode"], "dry-run")
            self.assertEqual([item["id"] for item in report["docker"]["unused_candidates"]], ["sha256:unused"])
            self.assertIn("sha256:anchor", [item["id"] for item in report["docker"]["protected"]])
            self.assertFalse(any(call[:3] == ["docker", "image", "rm"] for call in calls))
            self.assertIn("docker_volumes", report["excluded_targets"])

    def test_apply_refuses_active_release(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            lock = root / "lock"
            lock.touch()
            with self.assertRaises(maintenance.MaintenanceError):
                maintenance.apply_plan({"docker": {"unused_candidates": []}, "artifacts": {"deletion_candidates": []}}, lock, root, lambda _: "")

    def test_artifacts_require_offhost_verification_and_no_release_reference(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            policy = self.policy(root)
            protected = root / "current" / "keep.tar"
            unverified = root / "unverified.tar"
            referenced = root / "referenced.tar"
            eligible = root / "eligible.tar"
            for path in (protected, unverified, referenced, eligible):
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text("fixture")
            policy["artifact_candidates"] = [
                {"path": str(protected), "offhost_sha256_verified": True, "referenced_by_release": False},
                {"path": str(unverified), "offhost_sha256_verified": False, "referenced_by_release": False},
                {"path": str(referenced), "offhost_sha256_verified": True, "referenced_by_release": True},
                {"path": str(eligible), "offhost_sha256_verified": True, "referenced_by_release": False},
            ]
            result = maintenance.inspect_artifacts(policy)
            self.assertEqual(
                result["deletion_candidates"],
                [{"path": str(eligible.resolve()), "exists": True}],
            )
            self.assertEqual(len(result["refused"]), 3)

    def test_apply_is_idempotent_for_already_removed_artifact(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            missing = root / "missing.tar"
            report = {
                "docker": {"unused_candidates": []},
                "artifacts": {"deletion_candidates": [{"path": str(missing), "exists": False}]},
            }
            calls = []
            with patch.object(maintenance, "disk_status", return_value={"passes_release_gate": True}):
                first = maintenance.apply_plan(report, root / "lock", root, self.runner(calls))
                second = maintenance.apply_plan(report, root / "lock", root, self.runner(calls))
            self.assertTrue(first["disk_after"]["passes_release_gate"])
            self.assertTrue(second["disk_after"]["passes_release_gate"])


if __name__ == "__main__":
    unittest.main()
