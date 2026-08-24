-- Manual affiliate binding metadata and write-time self-binding protection.
--
-- Existing bound rows predate an explicit binding timestamp. Their affiliate
-- profile creation time is the closest safe historical value, so backfill it
-- once without changing any inviter relationship or rebate balance.

ALTER TABLE user_affiliates
    ADD COLUMN IF NOT EXISTS inviter_bound_at TIMESTAMPTZ NULL;

ALTER TABLE user_affiliates
    ADD COLUMN IF NOT EXISTS inviter_bound_by_admin_id BIGINT NULL;

-- Deliberately no FK: this is an immutable audit actor snapshot. Deleting the
-- administrator account must not erase who performed the manual binding.

UPDATE user_affiliates
SET inviter_bound_at = created_at
WHERE inviter_id IS NOT NULL
  AND inviter_bound_at IS NULL;

-- NOT VALID keeps deployments compatible with any historical bad rows while
-- still rejecting every new or updated self-binding from this migration on.
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'user_affiliates_no_self_inviter'
          AND conrelid = 'user_affiliates'::regclass
    ) THEN
        ALTER TABLE user_affiliates
            ADD CONSTRAINT user_affiliates_no_self_inviter
            CHECK (inviter_id IS NULL OR inviter_id <> user_id)
            NOT VALID;
    END IF;
END $$;

COMMENT ON COLUMN user_affiliates.inviter_bound_at IS 'Time when the immutable inviter relationship was bound';
COMMENT ON COLUMN user_affiliates.inviter_bound_by_admin_id IS 'Immutable ID snapshot of the admin who repaired the relationship; NULL for public signup binding';
