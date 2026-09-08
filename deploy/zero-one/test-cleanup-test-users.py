import importlib.util
from pathlib import Path
import unittest


SCRIPT = Path(__file__).with_name("cleanup-test-users.py")
SPEC = importlib.util.spec_from_file_location("cleanup_test_users", SCRIPT)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(MODULE)


class CleanupTestUsersTest(unittest.TestCase):
    def test_preview_is_read_only_and_targets_only_the_reviewed_ids(self):
        sql = MODULE.inspection_sql()
        self.assertIn("BEGIN READ ONLY", sql)
        self.assertNotIn("DELETE FROM users", sql)
        self.assertIn("u.id IN (300,302)", sql)
        self.assertIn(MODULE.TARGET_NOTES, sql)

    def test_execute_is_transactional_and_checks_all_references(self):
        sql = MODULE.deletion_sql()
        self.assertIn("BEGIN;", sql)
        self.assertIn("test-user cleanup precondition failed", sql)
        self.assertIn("cleanup_candidate_refs", sql)
        self.assertIn("DELETE FROM users WHERE id IN (300,302) RETURNING id", sql)
        self.assertIn("COMMIT;", sql)


if __name__ == "__main__":
    unittest.main()
