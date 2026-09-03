import { Layers, ReceiptText, RefreshCw, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import {
  CHANNEL_STATUS_TIMEOUT_MS,
  fetchChannelStatus,
  type ChannelStatusItem,
  type ChannelStatusResult,
} from "../lib/channelStatus";
import type { ModelPlazaData } from "../lib/modelPlaza";
import { consoleUrl, documentUrl } from "../siteConfig";
import Action from "./Action";
import ShinyText from "./ShinyText";
import { subscribePageResume } from "../lib/pageResume";

interface ValuePricingSectionProps {
  modelPlazaData: ModelPlazaData | null;
}

function lowestPublicRate(data: ModelPlazaData | null): number | null {
  const rates = (data?.groups ?? [])
    .map((group) => group.userRateMultiplier ?? group.rateMultiplier)
    .filter((rate) => Number.isFinite(rate) && rate >= 0);
  return rates.length ? Math.min(...rates) : null;
}

function formatDiscount(rate: number): string {
  return new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 2 }).format(
    rate,
  );
}

export function ValuePricingSection({
  modelPlazaData,
}: ValuePricingSectionProps) {
  const lowestRate = lowestPublicRate(modelPlazaData);
  const priceSummary =
    lowestRate === null
      ? "按实际配置结算"
      : `低至约 ${formatDiscount(lowestRate)} 折`;

  return (
    <section
      id="billing"
      className="value-pricing-section"
      aria-labelledby="value-pricing-title"
    >
      <h2
        id="value-pricing-title"
        className="value-pricing-title"
        data-reveal
      >
        <ShinyText text="每一份 token 按实际配置结算" speed={2} spread={120} />
      </h2>
      <div className="value-pricing-main section-layer">
        <div className="value-pricing-copy" data-reveal>
          <p className="value-pricing-description">
            <span>人民币：美金1:1充值，按量付费，实际用多少付多少。</span>
            <span>你的账户统一按人民币充值，按模型路由选择对应计费分组。</span>
          </p>
          <div
            className="value-pricing-benefits"
            aria-labelledby="value-pricing-reasons-title"
          >
            <h3 id="value-pricing-reasons-title">
              为什么你的 API 应该选择我们？
            </h3>
            <div className="value-pricing-reason-grid">
              <article className="value-pricing-reason-card">
                <span className="value-pricing-reason-icon" aria-hidden="true">
                  <Layers />
                </span>
                <h4>一个平台，接全模型。</h4>
                <p>模型广场中已公开的常用模型，一套 API 即可统一接入。</p>
              </article>
              <article className="value-pricing-reason-card">
                <span className="value-pricing-reason-icon" aria-hidden="true">
                  <Zap />
                </span>
                <h4>不再 token 焦虑。</h4>
                <p>按任务选择合适分组，减少限流干扰，调用成本更容易预估。</p>
              </article>
              <article className="value-pricing-reason-card">
                <span className="value-pricing-reason-icon" aria-hidden="true">
                  <ShieldCheck />
                </span>
                <h4>服务稳定，使用无忧。</h4>
                <p>服务状态持续公开，长期任务运行更安心，问题定位也更直接。</p>
              </article>
            </div>
          </div>
        </div>

        <div className="value-pricing-card" data-reveal data-reveal-delay="100">
          <p className="value-pricing-badge">
            <ReceiptText aria-hidden="true" />
            价格透明 · 无月费 · 无订阅
          </p>
          <div className="value-pricing-summary">
            <div>
              <h3><ShinyText text={priceSummary} speed={2} spread={120} /></h3>
              <p>按选择的计费分组自动计价。</p>
            </div>
          </div>
          <div className="value-pricing-action">
            <Action
              className="value-pricing-purchase"
              href={consoleUrl("/purchase?tab=recharge")}
            >
              购买额度
            </Action>
          </div>
        </div>
      </div>
    </section>
  );
}

type ChannelStatusViewState = { status: "loading" } | ChannelStatusResult;
const CHANNEL_STATUS_REFRESH_MS = 30_000;
const CHANNEL_STATUS_STATE_ORDER: Record<ChannelStatusItem["state"], number> = {
  operational: 0,
  degraded: 1,
  unknown: 2,
};

function statusLabel(item: ChannelStatusItem): string {
  if (item.state === "operational") return "正常";
  if (item.state === "degraded") return "降级";
  return item.observedAt ? "待更新" : "等待数据";
}

function statusNote(state: ChannelStatusViewState): string {
  if (state.status === "loading") return "正在读取渠道状态。";
  if (state.status === "success") {
    if ((state.data.items ?? []).length > 0) return "";
    if (state.data.mode === "traffic") return "当前监控模式未提供逐渠道检测记录。";
    if (state.data.reason === "no_monitors") return "管理员尚未配置可公开展示的监控渠道。";
    if (state.data.reason === "insufficient_data") return "暂无检测数据，请稍后查看。";
    if (state.data.reason === "disabled") return "当前站点未开启渠道监控。";
    return "";
  }
  if (state.status === "rate-limited") {
    return state.retryAfter
      ? `读取过于频繁，请在约 ${state.retryAfter} 秒后重试。`
      : "读取过于频繁，请稍后重试。";
  }
  if (state.status === "not-enabled" || state.status === "disabled") {
    return "当前站点未公开渠道状态汇总。";
  }
  if (state.status === "error" && state.reason === "timeout") {
    return "读取渠道状态超时，请重新读取。";
  }
  return "暂时无法读取渠道状态，请稍后重试。";
}

function formatAvailability(value: number | null): string {
  if (value === null) return "—";
  return `${new Intl.NumberFormat("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}%`;
}

function formatObservedAt(value: string | null): string {
  if (!value) return "";
  const time = Date.parse(value);
  if (!Number.isFinite(time)) return "";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date(time));
}

function timelineLabel(item: ChannelStatusItem): string {
  const availability = formatAvailability(item.availability7d);
  return `${item.name} 最近 ${item.timeline.length} 次检测记录，近 7 天可用率 ${
    availability === "—" ? "暂无数据" : availability
  }`;
}

export function StatusSection({ enabled = true }: { enabled?: boolean }) {
  const [attempt, setAttempt] = useState(0);
  const [refreshFailed, setRefreshFailed] = useState(false);
  const [state, setState] = useState<ChannelStatusViewState>(() =>
    enabled ? { status: "loading" } : { status: "disabled" },
  );

  useEffect(() => {
    if (!enabled) {
      setState({ status: "disabled" });
      setRefreshFailed(false);
      return;
    }

    let active = true;
    let controller: AbortController | null = null;
    let refreshTimer: number | null = null;
    let retryTimer: number | null = null;

    const clearRefreshTimer = () => {
      if (refreshTimer === null) return;
      window.clearTimeout(refreshTimer);
      refreshTimer = null;
    };

    const scheduleRefresh = () => {
      clearRefreshTimer();
      refreshTimer = window.setTimeout(() => {
        if (document.hidden) {
          scheduleRefresh();
          return;
        }
        void loadStatus(false);
      }, CHANNEL_STATUS_REFRESH_MS);
    };

    const loadStatus = async (showLoading: boolean, mayRetry = true) => {
      if (!active) return;
      clearRefreshTimer();
      if (retryTimer !== null) window.clearTimeout(retryTimer);
      retryTimer = null;
      controller?.abort();
      const requestController = new AbortController();
      controller = requestController;
      if (showLoading) {
        setState((current) => current.status === "success" ? current : { status: "loading" });
      }

      const result = await fetchChannelStatus({
        enabled: true,
        timeoutMs: CHANNEL_STATUS_TIMEOUT_MS,
        signal: requestController.signal,
      });
      if (!active || requestController.signal.aborted || controller !== requestController) return;
      controller = null;

      if (mayRetry && result.status === "error" &&
        ["timeout", "network", "server"].includes(result.reason)) {
        retryTimer = window.setTimeout(() => {
          retryTimer = null;
          void loadStatus(showLoading, false);
        }, 1_000);
        return;
      }

      const failed = result.status === "error" || result.status === "rate-limited";
      setRefreshFailed(failed);
      setState((current) =>
        current.status === "success" && failed
          ? current
          : result,
      );
      scheduleRefresh();
    };

    const unsubscribe = subscribePageResume(() => {
      if (controller !== null || retryTimer !== null) return;
      clearRefreshTimer();
      void loadStatus(false);
    });

    void loadStatus(true);
    return () => {
      active = false;
      clearRefreshTimer();
      if (retryTimer !== null) window.clearTimeout(retryTimer);
      controller?.abort();
      unsubscribe();
    };
  }, [attempt, enabled]);

  const shouldRetry = state.status === "error" || state.status === "rate-limited" ||
    (state.status === "success" && refreshFailed);
  const note = state.status === "success" && refreshFailed
    ? "更新暂时失败，正在显示上次成功读取的渠道状态。"
    : statusNote(state);
  const items =
    state.status === "success"
      ? [...(state.data.items ?? [])].sort(
          (left, right) =>
            CHANNEL_STATUS_STATE_ORDER[left.state] -
            CHANNEL_STATUS_STATE_ORDER[right.state],
        )
      : [];

  return (
    <section
      id="status"
      className="section status-section"
      aria-labelledby="status-title"
    >
      <div className="status-heading section-layer" data-reveal>
        <div className="section-heading section-heading-wide">
          <h2 id="status-title"><ShinyText text="渠道状态" speed={2} spread={120} /></h2>
        </div>
      </div>
      <div
        className="status-content section-layer"
        data-reveal
        data-reveal-delay="100"
      >
        <div
          className="status-monitor-panel"
          aria-label="渠道状态数据"
          aria-busy={state.status === "loading"}
          aria-live="polite"
        >
          <div className="status-monitor-header">
            <span className="status-monitor-heading">渠道</span>
            <div className="status-legend" aria-label="状态图例：从运行正常到不可用">
              <span className="status-legend-boundary">运行正常</span>
              <span className="status-legend-scale" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="status-legend-boundary">不可用</span>
            </div>
          </div>
          {state.status === "loading" ? (
            <div className="status-skeleton" data-testid="channel-status-skeleton" aria-hidden="true">
              {[0, 1, 2].map((row) => (
                <div className="status-monitor-row" key={row}>
                  <span className="status-skeleton-name" />
                  <span className="status-skeleton-timeline" />
                </div>
              ))}
            </div>
          ) : null}
          {items.map((item) => {
            const observedAt = formatObservedAt(item.observedAt);
            return (
              <div className="status-monitor-row" data-status={item.state} key={item.name}>
                <div className="status-monitor-row-head">
                  <div className="status-monitor-name">
                    <span className={`status-state-dot status-state-dot--${item.state}`} aria-hidden="true" />
                    <strong>{item.name}</strong>
                    <span className={`status-value--${item.state}`}>{statusLabel(item)}</span>
                  </div>
                  <div className="status-monitor-metrics">
                    <strong>
                      <span>{formatAvailability(item.availability7d)}</span> <span>可用率</span>
                    </strong>
                    {observedAt ? (
                      <>
                        <span className="status-metric-divider" aria-hidden="true">/</span>
                        <span>更新时间 {observedAt}</span>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="status-availability-meter" role="img" aria-label={timelineLabel(item)}>
                  {item.timeline.map((point, index) => (
                    <span aria-hidden="true" className={`is-${point.status}`} key={`${point.checkedAt}-${index}`} />
                  ))}
                  {item.timeline.length === 0 ? <small className="status-history-empty">暂无检测记录</small> : null}
                </div>
              </div>
            );
          })}
        </div>
        {note ? <p className="status-note" role="status">{note}</p> : null}
        {shouldRetry ? (
          <div className="status-actions">
            <Action
              type="button"
              onClick={() => setAttempt((value) => value + 1)}
            >
              <RefreshCw aria-hidden="true" />
              重新读取
            </Action>
          </div>
        ) : null}
      </div>
    </section>
  );
}

interface FooterProps {
  siteName: string;
  siteLogo: string;
  subtitle: string;
  docUrl: string;
  modelPlazaEnabled: boolean;
  channelMonitorEnabled: boolean;
  consoleHomePath: "/dashboard" | "/admin/dashboard" | null;
}

export function SiteFooter({
  siteName,
  siteLogo,
  subtitle,
  docUrl,
  modelPlazaEnabled,
  channelMonitorEnabled,
  consoleHomePath,
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-brand-lockup">
          {siteLogo ? (
            <img
              className="footer-brand-logo"
              src={siteLogo}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
            />
          ) : null}
          <strong><ShinyText text={siteName} speed={2.6} spread={120} /></strong>
        </div>
        <p><ShinyText text={subtitle} speed={2.6} spread={120} /></p>
        <span>
          © {new Date().getFullYear()} {siteName}
        </span>
      </div>
      <div className="footer-column">
        <strong>产品</strong>
        {modelPlazaEnabled ? (
          <a href={consoleUrl("/model-plaza")}>模型广场</a>
        ) : null}
        <a href={consoleUrl("/keys")}>API 密钥</a>
        <a href={consoleUrl("/usage")}>使用记录</a>
        <a href={consoleUrl("/redeem")}>兑换中心</a>
      </div>
      <div className="footer-column">
        <strong>资源</strong>
        {docUrl ? <a href={documentUrl(docUrl)}>开源知识库</a> : null}
        {channelMonitorEnabled ? (
          <a href={consoleUrl("/monitor")}>渠道状态</a>
        ) : null}
        <a href="#api-endpoint">API 地址</a>
        <a
          href="/_landing/THIRD_PARTY_NOTICES.txt"
          target="_blank"
          rel="noreferrer"
        >
          第三方许可
        </a>
      </div>
      <div className="footer-column">
        <strong>账户</strong>
        {consoleHomePath ? (
          <a href={consoleUrl(consoleHomePath)}>登录控制台</a>
        ) : (
          <>
            <a href={consoleUrl("/login")}>登录</a>
            <a href={consoleUrl("/dashboard")}>控制台</a>
          </>
        )}
        <a href={consoleUrl("/keys")}>配置密钥</a>
      </div>
    </footer>
  );
}
