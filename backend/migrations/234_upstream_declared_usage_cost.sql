-- Preserve historical local rates and debits. A missing historical declaration
-- cannot be reconstructed from today's account/probe settings.
ALTER TABLE usage_logs ADD COLUMN IF NOT EXISTS upstream_rate_multiplier numeric;
ALTER TABLE usage_logs ADD CONSTRAINT usage_logs_upstream_rate_nonnegative
  CHECK (upstream_rate_multiplier IS NULL OR
         (upstream_rate_multiplier >= 0 AND upstream_rate_multiplier < 'Infinity'::numeric));

-- Unlike SUM, one unknown component makes the total unknown; an empty scope is 0.
CREATE FUNCTION zero_one_cost_sum_step(state numeric, value numeric) RETURNS numeric
  LANGUAGE sql IMMUTABLE PARALLEL SAFE AS 'SELECT state + value';
CREATE AGGREGATE zero_one_cost_sum(numeric) (
  SFUNC = zero_one_cost_sum_step, STYPE = numeric, INITCOND = '0', PARALLEL = SAFE
);
-- Keep legacy columns/values readable by the previous image during rollback.
-- An old writer updates computed_at without this stamp: new readers then treat
-- its declaration totals as unknown until the current aggregator recomputes them.
ALTER TABLE usage_dashboard_hourly
  ADD COLUMN upstream_account_cost numeric,
  ADD COLUMN upstream_cost_computed_at timestamptz;
ALTER TABLE usage_dashboard_daily
  ADD COLUMN upstream_account_cost numeric,
  ADD COLUMN upstream_cost_computed_at timestamptz;
