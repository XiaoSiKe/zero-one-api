import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ChannelStatusResult, ChannelStatusSummary } from "../lib/channelStatus";
import { StatusSection } from "./ContentSections";

const mocks = vi.hoisted(() => ({
  fetchChannelStatus: vi.fn(),
}));

vi.mock("../lib/channelStatus", async (importOriginal) => {
  const original =
    await importOriginal<typeof import("../lib/channelStatus")>();
  return { ...original, fetchChannelStatus: mocks.fetchChannelStatus };
});

const success = (
  overrides: { status?: "success"; data?: Partial<ChannelStatusSummary> } = {},
): ChannelStatusResult => ({
  status: "success",
  data: {
    mode: "active_probe",
    state: "operational",
    reason: null,
    latencyMs: 218,
    availability7d: 99.98,
    observedAt: "2026-08-16T08:25:00Z",
    items: [],
    ...(overrides.status === "success" ? overrides.data : {}),
  },
});

describe("StatusSection", () => {
  beforeEach(() => mocks.fetchChannelStatus.mockReset());
  afterEach(() => {
    vi.useRealTimers();
    cleanup();
  });

  it("shows loading until the real channel summary resolves", async () => {
    let resolveRequest: (value: ChannelStatusResult) => void = () => {};
    mocks.fetchChannelStatus.mockReturnValue(
      new Promise<ChannelStatusResult>((resolve) => {
        resolveRequest = resolve;
      }),
    );

    render(<StatusSection />);
    expect(screen.getByText("正在读取渠道状态。")).toBeTruthy();
    expect(
      screen.getByLabelText("渠道状态数据").getAttribute("aria-busy"),
    ).toBe("true");

    await act(async () => resolveRequest(success()));
    expect(screen.getByText("渠道")).toBeTruthy();
    expect(screen.queryByText("渠道汇总")).toBeNull();
    expect(screen.getByLabelText("渠道状态数据").querySelectorAll(".status-monitor-row")).toHaveLength(0);
    expect(mocks.fetchChannelStatus).toHaveBeenCalledWith(
      expect.objectContaining({
        enabled: true,
        timeoutMs: 8_000,
        signal: expect.any(AbortSignal),
      }),
    );
  });

  it("does not render an operational state when no monitoring data exists", async () => {
    mocks.fetchChannelStatus.mockResolvedValue(
      success({
        status: "success",
        data: {
          state: "unknown",
          mode: "active_probe",
          reason: "no_monitors",
          latencyMs: null,
          availability7d: null,
          observedAt: null,
          items: [],
        },
      }),
    );
    render(<StatusSection />);

    expect(
      await screen.findByText("管理员尚未配置可公开展示的监控渠道。"),
    ).toBeTruthy();
    expect(screen.queryByText("渠道汇总")).toBeNull();
    expect(screen.queryByText("正常")).toBeNull();
  });

  it("retries without retaining a failed or illustrative status", async () => {
    const user = userEvent.setup();
    mocks.fetchChannelStatus
      .mockResolvedValueOnce({ status: "error", reason: "invalid-response" })
      .mockResolvedValueOnce(
        success({
          status: "success",
          data: {
            state: "degraded",
            mode: "active_probe",
            reason: null,
            latencyMs: 650,
            availability7d: 97.2,
            observedAt: "2026-08-16T08:25:00Z",
            items: [{
              name: "OpenAI 主线路",
              state: "degraded",
              availability7d: 97.2,
              observedAt: "2026-08-16T08:25:00Z",
              timeline: [],
            }],
          },
        }),
      );

    render(<StatusSection />);
    expect(
      await screen.findByText("暂时无法读取渠道状态，请稍后重试。"),
    ).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "重新读取" }));
    expect(await screen.findByText("OpenAI 主线路")).toBeTruthy();
    expect(await screen.findByText("降级")).toBeTruthy();
    expect(screen.getByText("97.20%")).toBeTruthy();
    expect(screen.getByText("可用率")).toBeTruthy();
    expect(mocks.fetchChannelStatus).toHaveBeenCalledTimes(2);
    expect(mocks.fetchChannelStatus.mock.calls[0]?.[0]?.signal).not.toBe(
      mocks.fetchChannelStatus.mock.calls[1]?.[0]?.signal,
    );
  });

  it("does not request a summary when the channel-status capability is off", () => {
    render(<StatusSection enabled={false} />);
    expect(screen.getByText("当前站点未公开渠道状态汇总。")).toBeTruthy();
    expect(mocks.fetchChannelStatus).not.toHaveBeenCalled();
  });

  it("refreshes a restored page immediately instead of waiting for the suspended timer", async () => {
    mocks.fetchChannelStatus.mockResolvedValue(success());
    render(<StatusSection />);
    await act(async () => Promise.resolve());
    await act(async () => {
      window.dispatchEvent(new PageTransitionEvent("pageshow", { persisted: true }));
    });
    expect(mocks.fetchChannelStatus).toHaveBeenCalledTimes(2);
  });

  it("does not invent a channel row when the response has only an aggregate", async () => {
    mocks.fetchChannelStatus.mockResolvedValue(
      success({
        status: "success",
        data: {
          mode: "traffic",
          state: "operational",
          reason: null,
          latencyMs: 240,
          availability7d: null,
          observedAt: "2026-08-16T08:25:00Z",
          items: [],
        },
      }),
    );
    render(<StatusSection />);

    await screen.findByText("渠道");
    expect(screen.queryByText("渠道汇总")).toBeNull();
    expect(screen.queryByText("中位首字响应 240 ms")).toBeNull();
    expect(screen.getByLabelText("渠道状态数据").querySelectorAll(".status-monitor-row")).toHaveLength(0);
    expect(screen.getByText("当前监控模式未提供逐渠道检测记录。")).toBeTruthy();
  });

  it("keeps active-probe channel rows when they are available", async () => {
    mocks.fetchChannelStatus.mockResolvedValue(
      success({
        status: "success",
        data: {
          mode: "active_probe",
          state: "operational",
          reason: null,
          latencyMs: 218,
          availability7d: 99.98,
          observedAt: "2026-08-16T08:25:00Z",
          items: [{
            name: "OpenAI 主线路",
            state: "operational",
            availability7d: 99.92,
            observedAt: "2026-08-16T08:25:00Z",
            timeline: [],
          }],
        },
      }),
    );

    render(<StatusSection />);

    expect(await screen.findByText("OpenAI 主线路")).toBeTruthy();
    expect(screen.getByText("99.92%")).toBeTruthy();
    expect(screen.getByText("可用率")).toBeTruthy();
    expect(screen.queryByText("渠道汇总")).toBeNull();
  });

  it("shows operational channels before degraded channels", async () => {
    mocks.fetchChannelStatus.mockResolvedValue(
      success({
        status: "success",
        data: {
          mode: "active_probe",
          state: "degraded",
          reason: null,
          latencyMs: 218,
          availability7d: 98.2,
          observedAt: "2026-08-16T08:25:00Z",
          items: [
            {
              name: "降级线路",
              state: "degraded",
              availability7d: 96.5,
              observedAt: "2026-08-16T08:25:00Z",
              timeline: [],
            },
            {
              name: "正常线路",
              state: "operational",
              availability7d: 99.9,
              observedAt: "2026-08-16T08:25:00Z",
              timeline: [],
            },
          ],
        },
      }),
    );

    render(<StatusSection />);

    await screen.findByText("正常线路");
    const names = Array.from(
      screen
        .getByLabelText("渠道状态数据")
        .querySelectorAll<HTMLElement>(".status-monitor-name strong"),
      (element) => element.textContent,
    );
    expect(names).toEqual(["正常线路", "降级线路"]);
  });

  it("refreshes visible status without clearing the last successful result", async () => {
    vi.useFakeTimers();
    let resolveRefresh: (value: ChannelStatusResult) => void = () => {};
    mocks.fetchChannelStatus
      .mockResolvedValueOnce(
        success({
          status: "success",
          data: {
            mode: "active_probe",
            state: "operational",
            reason: null,
            latencyMs: 218,
            availability7d: 99.92,
            observedAt: "2026-08-16T08:25:00Z",
            items: [{
              name: "OpenAI 主线路",
              state: "operational",
              availability7d: 99.92,
              observedAt: "2026-08-16T08:25:00Z",
              timeline: [],
            }],
          },
        }),
      )
      .mockReturnValueOnce(
        new Promise<ChannelStatusResult>((resolve) => {
          resolveRefresh = resolve;
        }),
      );

    render(<StatusSection />);
    await act(async () => Promise.resolve());
    expect(screen.getByText("OpenAI 主线路")).toBeTruthy();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(30_000);
    });
    expect(mocks.fetchChannelStatus).toHaveBeenCalledTimes(2);
    expect(screen.getByText("OpenAI 主线路")).toBeTruthy();
    expect(screen.queryByText("正在读取渠道状态。")).toBeNull();

    await act(async () => resolveRefresh(success()));
  });

  it("retries a transient first read once after one second and keeps loading", async () => {
    vi.useFakeTimers();
    mocks.fetchChannelStatus
      .mockResolvedValueOnce({ status: "error", reason: "timeout" })
      .mockResolvedValueOnce(success());
    render(<StatusSection />);
    await act(async () => Promise.resolve());
    expect(screen.getByLabelText("渠道状态数据").getAttribute("aria-busy")).toBe("true");
    expect(screen.getByTestId("channel-status-skeleton")).toBeTruthy();
    await act(async () => vi.advanceTimersByTimeAsync(999));
    expect(mocks.fetchChannelStatus).toHaveBeenCalledTimes(1);
    await act(async () => vi.advanceTimersByTimeAsync(1));
    expect(mocks.fetchChannelStatus).toHaveBeenCalledTimes(2);
    expect(screen.queryByTestId("channel-status-skeleton")).toBeNull();
    expect(screen.queryByRole("button", { name: "重新读取" })).toBeNull();
  });

  it("marks the retained result when refresh fails, then clears it when disabled", async () => {
    vi.useFakeTimers();
    mocks.fetchChannelStatus
      .mockResolvedValueOnce(success({ status: "success", data: {
        items: [{ name: "现有渠道", state: "operational", availability7d: 99, observedAt: "2026-08-16T08:25:00Z", timeline: [] }],
      } }))
      .mockResolvedValue({ status: "error", reason: "server" });
    const { rerender } = render(<StatusSection />);
    await act(async () => Promise.resolve());
    await act(async () => vi.advanceTimersByTimeAsync(31_000));
    expect(screen.getByText("现有渠道")).toBeTruthy();
    expect(screen.getByText("更新暂时失败，正在显示上次成功读取的渠道状态。" )).toBeTruthy();
    expect(mocks.fetchChannelStatus).toHaveBeenCalledTimes(3);
    rerender(<StatusSection enabled={false} />);
    expect(screen.queryByText("现有渠道")).toBeNull();
    expect(screen.getByText("当前站点未公开渠道状态汇总。")).toBeTruthy();
  });

  it("cancels a scheduled retry when the section unmounts", async () => {
    vi.useFakeTimers();
    mocks.fetchChannelStatus.mockResolvedValue({ status: "error", reason: "network" });
    const { unmount } = render(<StatusSection />);
    await act(async () => Promise.resolve());
    unmount();
    await act(async () => vi.advanceTimersByTimeAsync(60_000));
    expect(mocks.fetchChannelStatus).toHaveBeenCalledTimes(1);
  });

  it("shows real rows alongside incomplete rows without claiming all channels are healthy", async () => {
    mocks.fetchChannelStatus.mockResolvedValue(success({ status: "success", data: {
      state: "unknown", reason: "insufficient_data", items: [
        { name: "有效渠道", state: "operational", availability7d: 99, observedAt: "2026-08-16T08:25:00Z", timeline: [] },
        { name: "缺样本渠道", state: "unknown", availability7d: null, observedAt: null, timeline: [] },
        { name: "过期渠道", state: "unknown", availability7d: 97, observedAt: "2026-08-16T05:00:00Z", timeline: [] },
      ],
    } }));
    render(<StatusSection />);
    expect(await screen.findByText("有效渠道")).toBeTruthy();
    expect(screen.getByText("等待数据")).toBeTruthy();
    expect(screen.getByText("待更新")).toBeTruthy();
    expect(screen.getAllByText("暂无检测记录")).toHaveLength(3);
  });
});
