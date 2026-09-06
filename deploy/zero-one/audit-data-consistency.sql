-- Read-only operational audit for the canonical Zero One PostgreSQL database.
-- Run with psql against a snapshot or a production read-only transaction.
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ READ ONLY;
SET LOCAL statement_timeout = '30s';

SELECT
  COUNT(*) FILTER (WHERE deleted_at IS NULL) AS visible_users,
  COUNT(*) FILTER (WHERE deleted_at IS NULL AND role = 'user') AS ordinary_users,
  COUNT(*) FILTER (WHERE deleted_at IS NULL AND role = 'admin') AS administrators,
  COUNT(*) FILTER (WHERE deleted_at IS NOT NULL) AS soft_deleted_users,
  COUNT(*) FILTER (
    WHERE deleted_at IS NULL
      AND created_at >= date_trunc('day', NOW() AT TIME ZONE 'Asia/Shanghai') AT TIME ZONE 'Asia/Shanghai'
  ) AS new_users_today
FROM users;

SELECT 'active_api_keys_missing_user' AS check_name, COUNT(*) AS failures
FROM api_keys k
LEFT JOIN users u ON u.id = k.user_id AND u.deleted_at IS NULL
WHERE k.deleted_at IS NULL AND u.id IS NULL
UNION ALL
SELECT 'usage_missing_user', COUNT(*)
FROM usage_logs l LEFT JOIN users u ON u.id = l.user_id WHERE u.id IS NULL
UNION ALL
SELECT 'usage_missing_api_key', COUNT(*)
FROM usage_logs l LEFT JOIN api_keys k ON k.id = l.api_key_id
WHERE l.api_key_id IS NOT NULL AND k.id IS NULL
UNION ALL
SELECT 'usage_missing_account', COUNT(*)
FROM usage_logs l LEFT JOIN accounts a ON a.id = l.account_id
WHERE l.account_id IS NOT NULL AND a.id IS NULL
UNION ALL
SELECT 'redeem_claim_state_mismatch', COUNT(*)
FROM redeem_codes
WHERE (used_by IS NOT NULL OR used_at IS NOT NULL) <> (status = 'used')
UNION ALL
SELECT 'active_subscription_missing_user_or_group', COUNT(*)
FROM user_subscriptions s
LEFT JOIN users u ON u.id = s.user_id AND u.deleted_at IS NULL
LEFT JOIN groups g ON g.id = s.group_id AND g.deleted_at IS NULL
WHERE s.deleted_at IS NULL AND s.status = 'active' AND (u.id IS NULL OR g.id IS NULL)
UNION ALL
SELECT 'affiliate_self_cycle', COUNT(*) FROM user_affiliates WHERE inviter_id = user_id
UNION ALL
SELECT 'affiliate_missing_inviter', COUNT(*)
FROM user_affiliates a LEFT JOIN users u ON u.id = a.inviter_id
WHERE a.inviter_id IS NOT NULL AND u.id IS NULL
ORDER BY check_name;

WITH source AS (
  SELECT
    (created_at AT TIME ZONE 'Asia/Shanghai')::date AS bucket_day,
    COUNT(*) AS total_requests,
    COALESCE(SUM(input_tokens), 0) AS input_tokens,
    COALESCE(SUM(output_tokens), 0) AS output_tokens,
    COALESCE(SUM(cache_creation_tokens), 0) AS cache_creation_tokens,
    COALESCE(SUM(cache_read_tokens), 0) AS cache_read_tokens,
    COALESCE(SUM(total_cost), 0) AS total_cost,
    COALESCE(SUM(actual_cost), 0) AS actual_cost
  FROM usage_logs
  WHERE created_at >= date_trunc('day', NOW() AT TIME ZONE 'Asia/Shanghai')
    AT TIME ZONE 'Asia/Shanghai' - INTERVAL '7 days'
  GROUP BY 1
), compared AS (
  SELECT
    COALESCE(s.bucket_day, d.bucket_date) AS bucket_day,
    (s.total_requests, s.input_tokens, s.output_tokens, s.cache_creation_tokens,
      s.cache_read_tokens, s.total_cost, s.actual_cost)
    IS DISTINCT FROM
    (d.total_requests, d.input_tokens, d.output_tokens, d.cache_creation_tokens,
      d.cache_read_tokens, d.total_cost, d.actual_cost) AS mismatch
  FROM source s
  FULL JOIN usage_dashboard_daily d ON d.bucket_date = s.bucket_day
  WHERE COALESCE(s.bucket_day, d.bucket_date) >= CURRENT_DATE - 7
)
SELECT bucket_day, mismatch FROM compared ORDER BY bucket_day;

SELECT id, last_aggregated_at, NOW() - last_aggregated_at AS aggregation_lag
FROM usage_dashboard_aggregation_watermark
WHERE id = 1;

-- Negative balances are informational: accurate post-request charging is
-- allowed to record a small overdraft. They are not an integrity failure.
SELECT
  COUNT(*) FILTER (WHERE deleted_at IS NULL AND balance < 0) AS users_with_overdraft,
  COALESCE(MIN(balance) FILTER (WHERE deleted_at IS NULL), 0) AS minimum_balance,
  COUNT(*) FILTER (WHERE deleted_at IS NULL AND frozen_balance < 0) AS negative_frozen_balances
FROM users;

SELECT type, status, COUNT(*) FROM redeem_codes GROUP BY type, status ORDER BY type, status;
SELECT status, COUNT(*) FROM payment_orders GROUP BY status ORDER BY status;
SELECT status, COUNT(*) FROM user_subscriptions WHERE deleted_at IS NULL GROUP BY status ORDER BY status;

COMMIT;
