-- Taxonomy v2 separates user authentication/quota failures from upstream
-- provider authentication/quota failures. Restart the existing gentle backfill
-- cursor without scanning source tables in the migration itself. The V2
-- aggregator rewrites at most one bounded historical chunk per normal tick.
UPDATE channel_monitor_v2_watermarks
SET error_coverage_start = date_trunc('minute', NOW()) - INTERVAL '10 minutes',
    backfill_cursor = date_trunc('minute', NOW()),
    updated_at = NOW()
WHERE id = 1;
