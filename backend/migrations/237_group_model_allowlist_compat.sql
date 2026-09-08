-- 237: keep the v0.2.1 models_list_config column synchronized during rollback.
-- model_allowlist is canonical in v0.2.3; the legacy column remains writable so
-- the pre-release image can run against the migrated database without data loss.
ALTER TABLE groups
    ADD COLUMN IF NOT EXISTS models_list_config JSONB NOT NULL DEFAULT '{}'::jsonb;

UPDATE groups
   SET models_list_config = model_allowlist
 WHERE models_list_config IS DISTINCT FROM model_allowlist;

CREATE OR REPLACE FUNCTION zero_one_sync_group_model_allowlist_compat()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        IF NEW.model_allowlist IS DISTINCT FROM '{}'::jsonb
           AND NEW.models_list_config IS DISTINCT FROM '{}'::jsonb
           AND NEW.model_allowlist IS DISTINCT FROM NEW.models_list_config THEN
            RAISE EXCEPTION 'conflicting model_allowlist and models_list_config values';
        END IF;
        IF NEW.model_allowlist IS DISTINCT FROM '{}'::jsonb THEN
            NEW.models_list_config := NEW.model_allowlist;
        ELSE
            NEW.model_allowlist := NEW.models_list_config;
        END IF;
        RETURN NEW;
    END IF;

    IF NEW.model_allowlist IS DISTINCT FROM OLD.model_allowlist
       AND NEW.models_list_config IS DISTINCT FROM OLD.models_list_config THEN
        IF NEW.model_allowlist IS DISTINCT FROM NEW.models_list_config THEN
            RAISE EXCEPTION 'conflicting model_allowlist and models_list_config values';
        END IF;
    ELSIF NEW.model_allowlist IS DISTINCT FROM OLD.model_allowlist THEN
        NEW.models_list_config := NEW.model_allowlist;
    ELSIF NEW.models_list_config IS DISTINCT FROM OLD.models_list_config THEN
        NEW.model_allowlist := NEW.models_list_config;
    END IF;
    RETURN NEW;
END
$$;

DROP TRIGGER IF EXISTS zero_one_group_model_allowlist_compat ON groups;
CREATE TRIGGER zero_one_group_model_allowlist_compat
BEFORE INSERT OR UPDATE OF model_allowlist, models_list_config ON groups
FOR EACH ROW
EXECUTE FUNCTION zero_one_sync_group_model_allowlist_compat();

COMMENT ON COLUMN groups.models_list_config IS
    'v0.2.1 rollback compatibility mirror of groups.model_allowlist';
