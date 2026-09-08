#!/usr/bin/env python3
"""Preview or delete the two verified legacy release-test users.

The command is dry-run by default. It refuses to delete if either row changed,
has business value, or is referenced by any foreign key or known audit column.
"""

from __future__ import annotations

import argparse
import subprocess
from pathlib import Path


TARGET_IDS = (300, 302)
TARGET_USERNAME = "Release verification"
TARGET_NOTES = "Temporary zero-balance login verification for 0e52cd9a5716414a7e6b4dc80a1e5302d2344f9e"


def inspection_sql() -> str:
    ids = ",".join(str(value) for value in TARGET_IDS)
    return f"""
BEGIN READ ONLY;
CREATE TEMP TABLE cleanup_candidate_refs (
    user_id bigint NOT NULL,
    source text NOT NULL,
    matches bigint NOT NULL
) ON COMMIT DROP;
DO $$
DECLARE ref record; candidate bigint; hits bigint;
BEGIN
  FOR ref IN
    SELECT con.conrelid::regclass AS table_name, att.attname AS column_name
      FROM pg_constraint con
      JOIN unnest(con.conkey) WITH ORDINALITY key(attnum, ord) ON true
      JOIN pg_attribute att ON att.attrelid = con.conrelid AND att.attnum = key.attnum
     WHERE con.contype = 'f' AND con.confrelid = 'users'::regclass
  LOOP
    FOREACH candidate IN ARRAY ARRAY[{ids}]::bigint[] LOOP
      EXECUTE format('SELECT count(*) FROM %s WHERE %I = $1', ref.table_name, ref.column_name)
        INTO hits USING candidate;
      IF hits > 0 THEN
        INSERT INTO cleanup_candidate_refs VALUES (
          candidate, ref.table_name::text || '.' || ref.column_name, hits
        );
      END IF;
    END LOOP;
  END LOOP;
END $$;
INSERT INTO cleanup_candidate_refs
SELECT actor_user_id, 'audit_logs.actor_user_id', count(*)
  FROM audit_logs WHERE actor_user_id IN ({ids}) GROUP BY actor_user_id;
INSERT INTO cleanup_candidate_refs
SELECT user_id, 'deleted_api_key_audits.user_id', count(*)
  FROM deleted_api_key_audits WHERE user_id IN ({ids}) GROUP BY user_id;
INSERT INTO cleanup_candidate_refs
SELECT deleted_key_owner_user_id, 'ops_error_logs.deleted_key_owner_user_id', count(*)
  FROM ops_error_logs WHERE deleted_key_owner_user_id IN ({ids}) GROUP BY deleted_key_owner_user_id;
INSERT INTO cleanup_candidate_refs
SELECT inviter_bound_by_admin_id, 'user_affiliates.inviter_bound_by_admin_id', count(*)
  FROM user_affiliates WHERE inviter_bound_by_admin_id IN ({ids}) GROUP BY inviter_bound_by_admin_id;
SELECT jsonb_pretty(jsonb_agg(jsonb_build_object(
  'id', u.id,
  'email_domain', split_part(u.email, '@', 2),
  'username', u.username,
  'notes', u.notes,
  'deleted', u.deleted_at IS NOT NULL,
  'balance', u.balance,
  'frozen_balance', u.frozen_balance,
  'total_recharged', u.total_recharged,
  'references', COALESCE((
    SELECT jsonb_object_agg(source, matches) FROM cleanup_candidate_refs r WHERE r.user_id = u.id
  ), '{{}}'::jsonb),
  'eligible', u.deleted_at IS NOT NULL
    AND split_part(u.email, '@', 2) = 'example.invalid'
    AND u.username = '{TARGET_USERNAME}'
    AND u.notes = '{TARGET_NOTES}'
    AND u.balance = 0 AND u.frozen_balance = 0 AND u.total_recharged = 0
    AND NOT EXISTS (SELECT 1 FROM cleanup_candidate_refs r WHERE r.user_id = u.id)
) ORDER BY u.id))
FROM users u WHERE u.id IN ({ids});
ROLLBACK;
"""


def deletion_sql() -> str:
    ids = ",".join(str(value) for value in TARGET_IDS)
    return inspection_sql().replace("BEGIN READ ONLY;", "BEGIN;").replace(
        "SELECT jsonb_pretty(jsonb_agg(jsonb_build_object(",
        "DO $$ DECLARE bad bigint; BEGIN SELECT count(*) INTO bad FROM users u "
        f"WHERE u.id IN ({ids}) AND NOT (u.deleted_at IS NOT NULL "
        "AND split_part(u.email, '@', 2) = 'example.invalid' "
        f"AND u.username = '{TARGET_USERNAME}' AND u.notes = '{TARGET_NOTES}' "
        "AND u.balance = 0 AND u.frozen_balance = 0 AND u.total_recharged = 0 "
        "AND NOT EXISTS (SELECT 1 FROM cleanup_candidate_refs r WHERE r.user_id = u.id)); "
        f"IF bad <> 0 OR (SELECT count(*) FROM users WHERE id IN ({ids})) <> {len(TARGET_IDS)} "
        "THEN RAISE EXCEPTION 'test-user cleanup precondition failed'; END IF; END $$;\n"
        "SELECT jsonb_pretty(jsonb_agg(jsonb_build_object("
    ).replace(
        "ROLLBACK;",
        f"DELETE FROM users WHERE id IN ({ids}) RETURNING id;\nCOMMIT;",
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--execute", action="store_true", help="perform the guarded deletion")
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[2]
    command = [
        "docker", "compose",
        "--env-file", str(root / "deploy/zero-one/.env"),
        "-f", str(root / "deploy/zero-one/compose.yml"),
        "exec", "-T", "postgres", "psql", "-v", "ON_ERROR_STOP=1",
        "-U", "sub2api", "-d", "sub2api", "-At",
    ]
    result = subprocess.run(
        command,
        cwd=root,
        input=deletion_sql() if args.execute else inspection_sql(),
        text=True,
        check=False,
    )
    return result.returncode


if __name__ == "__main__":
    raise SystemExit(main())
