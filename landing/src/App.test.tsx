import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {
  DEFAULT_PUBLIC_SETTINGS,
  type PublicSettings,
} from "./lib/publicSettings";

const mocks = vi.hoisted(() => ({
  fetchModelPlaza: vi.fn(),
  fetchChannelStatus: vi.fn(),
  fetchPublicAnnouncements: vi.fn(),
}));

vi.mock("./components/Threads", () => ({
  default: ({
    persistent = false,
    className = "",
  }: {
    persistent?: boolean;
    className?: string;
  }) => (
    <div
      data-testid="threads"
      data-persistent={String(persistent)}
      className={className}
      aria-hidden="true"
    />
  ),
}));

vi.mock("./lib/modelPlaza", async (importOriginal) => {
  const original = await importOriginal<typeof import("./lib/modelPlaza")>();
  return {
    ...original,
    fetchModelPlaza: mocks.fetchModelPlaza,
  };
});

vi.mock("./lib/channelStatus", async (importOriginal) => {
  const original = await importOriginal<typeof import("./lib/channelStatus")>();
  return { ...original, fetchChannelStatus: mocks.fetchChannelStatus };
});

vi.mock("./lib/publicAnnouncements", async (importOriginal) => {
  const original =
    await importOriginal<typeof import("./lib/publicAnnouncements")>();
  return {
    ...original,
    fetchPublicAnnouncements: mocks.fetchPublicAnnouncements,
  };
});

const settings = (overrides: Partial<PublicSettings> = {}): PublicSettings => ({
  ...DEFAULT_PUBLIC_SETTINGS,
  ...overrides,
});

const renderApp = (initialSettings = settings()) =>
  render(<App initialSettings={initialSettings} />);

describe("public site", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
    mocks.fetchModelPlaza.mockReset();
    mocks.fetchModelPlaza.mockResolvedValue({
      status: "empty",
      data: { description: "", groups: [] },
    });
    mocks.fetchChannelStatus.mockReset();
    mocks.fetchChannelStatus.mockResolvedValue({
      status: "success",
      data: {
        mode: "active_probe",
        state: "unknown",
        reason: "no_monitors",
        latencyMs: null,
        availability7d: null,
        observedAt: null,
      },
    });
    mocks.fetchPublicAnnouncements.mockReset();
    mocks.fetchPublicAnnouncements.mockResolvedValue([]);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("renders configured public settings and hides registration when disabled", async () => {
    renderApp(
      settings({
        siteName: "零一 API 测试站",
        siteSubtitle: "稳定的模型调用入口。",
        docUrl: "https://docs.01yapi.com/guide",
        registrationEnabled: false,
      }),
    );

    expect(
      (await screen.findAllByText("稳定的模型调用入口。")).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: "零一 API 测试站 首页" }),
    ).toBeTruthy();
    expect(
      screen
        .getAllByRole("link", { name: "文档" })
        .some(
          (link) =>
            link.getAttribute("href") === "https://docs.01yapi.com/guide",
        ),
    ).toBe(true);
    expect(screen.queryByRole("link", { name: "注册账号" })).toBeNull();
    expect(
      screen.getAllByRole("link", { name: "登录控制台" }).length,
    ).toBeGreaterThan(0);
  });

  it("uses exactly one persistent page-level Threads background", () => {
    renderApp();

    const backgrounds = screen.getAllByTestId("threads");
    expect(backgrounds).toHaveLength(1);
    expect(backgrounds[0]?.getAttribute("data-persistent")).toBe("true");
    expect(backgrounds[0]?.classList.contains("threads-page-background")).toBe(
      true,
    );
  });

  it("adds a decorative shine layer to every requested landing title", async () => {
    const { container } = renderApp(
      settings({
        siteName: "零一 API 测试站",
        siteSubtitle: "稳定的模型调用入口。",
        modelPlazaEnabled: true,
        channelMonitorEnabled: true,
        publicChannelStatusEnabled: true,
      }),
    );
    await waitFor(() => expect(container.querySelector("#status-title")).not.toBeNull());

    for (const selector of [
      "#quick-start-title",
      "#pricing-title",
      "#value-pricing-title",
      "#status-title",
      ".footer-brand strong",
      ".footer-brand p",
    ]) {
      const target = container.querySelector(selector);
      expect(target?.querySelector(":scope > .shiny-text")).not.toBeNull();
      expect(
        target
          ?.querySelector(":scope > .shiny-text > .shiny-text__shine")
          ?.getAttribute("aria-hidden"),
      ).toBe("true");
    }

    for (const selector of [
      ".footer-brand strong > .shiny-text",
      ".footer-brand p > .shiny-text",
    ]) {
      expect(
        (container.querySelector(selector) as HTMLElement | null)?.style.getPropertyValue(
          "--shiny-text-speed",
        ),
      ).toBe("2.6s");
    }
  });

  it("does not render a default landing announcement", () => {
    renderApp();

    expect(
      screen.queryByRole("complementary", { name: "站点公告" }),
    ).toBeNull();
    expect(
      screen.queryByText("Claude Code 与 Codex CLI 接入配置已支持一键复制。"),
    ).toBeNull();
  });

  it("renders the fixed two-line hero without the retired title or duplicate subtitle", () => {
    renderApp();

    const hero = document.querySelector(".hero");
    const heading = screen.getByRole("heading", { level: 1 });
    const lines = [
      ...heading.querySelectorAll<HTMLElement>(".echo-text__echo--front"),
    ];

    expect(hero).not.toBeNull();
    expect(lines.map((line) => line.textContent)).toEqual([
      "零一 API",
      "从零到一，连接每一次模型调用",
    ]);
    expect(hero?.querySelector(".hero-description")).toBeNull();
    expect(hero?.textContent).not.toContain("一个 API，");
    expect(heading.querySelector("canvas")).toBeNull();
  });

  it("routes local landing console actions to the real local backend", async () => {
    const { container } = renderApp(
      settings({
        docUrl: "https://docs.01yapi.com/guide",
        registrationEnabled: true,
        modelPlazaEnabled: true,
        channelMonitorEnabled: true,
        publicChannelStatusEnabled: true,
      }),
    );

    await waitFor(() =>
      expect(container.querySelector("#status")).not.toBeNull(),
    );
    expect(container.innerHTML).not.toContain("https://app.01yapi.com");
    expect(container.innerHTML).not.toContain("#preview");
    expect(screen.queryByRole("link", { name: "打开模型广场" })).toBeNull();
    expect(container.textContent).not.toContain("本地预览");
    expect(container.textContent).not.toContain("本地布局预览数据");
    const registrationLinks = screen.getAllByRole("link", { name: "注册账号" });
    expect(registrationLinks.length).toBeGreaterThanOrEqual(2);
    expect(
      registrationLinks.every(
        (link) =>
          link.getAttribute("href") === "http://127.0.0.1:8080/register",
      ),
    ).toBe(true);
    expect(
      screen
        .getAllByRole("link", { name: "登录" })
        .every(
          (link) => link.getAttribute("href") === "http://127.0.0.1:8080/login",
        ),
    ).toBe(true);
    expect(
      screen.getByRole("link", { name: "创建 API Key" }).getAttribute("href"),
    ).toBe("http://127.0.0.1:8080/keys");
    expect(screen.queryByRole("link", { name: "获取 API Key" })).toBeNull();
  });

  it.each([
    ["user", "/dashboard"],
    ["admin", "/admin/dashboard"],
  ])(
    "replaces login and registration with the %s console entry for a saved session",
    async (role, path) => {
      localStorage.setItem("auth_token", "saved-token");
      localStorage.setItem("auth_user", JSON.stringify({ role }));

      renderApp(settings({ registrationEnabled: true }));

      expect(screen.queryByRole("link", { name: "登录" })).toBeNull();
      expect(screen.queryByRole("link", { name: "注册账号" })).toBeNull();
      const consoleLinks = screen.getAllByRole("link", { name: "登录控制台" });
      expect(consoleLinks.length).toBeGreaterThanOrEqual(3);
      expect(
        consoleLinks.every(
          (link) => link.getAttribute("href") === `http://127.0.0.1:8080${path}`,
        ),
      ).toBe(true);
    },
  );

  it("does not request or render public status when only the authenticated monitor is enabled", async () => {
    const { container } = renderApp(
      settings({
        channelMonitorEnabled: true,
        publicChannelStatusEnabled: false,
      }),
    );

    expect(container.querySelector("#status")).toBeNull();
    expect(mocks.fetchChannelStatus).not.toHaveBeenCalled();
    expect(screen.queryByRole("link", { name: "渠道状态" })).toBeNull();
  });

  it("removes the advantages module while keeping the value-pricing section", () => {
    renderApp();

    const billing = document.querySelector<HTMLElement>("#billing");
    expect(billing).not.toBeNull();
    expect(billing?.querySelector(".value-pricing-card")).not.toBeNull();
    expect(billing?.textContent).toContain("每一份 token 按实际配置结算");
    expect(billing?.textContent).toContain("人民币：美金1:1充值，按量付费，实际用多少付多少。");
    expect(billing?.textContent).toContain("按实际配置结算");
    expect(
      within(billing!)
        .getByRole("link", { name: "购买额度" })
        .getAttribute("href"),
    ).toBe("http://127.0.0.1:8080/purchase?tab=recharge");
    expect(document.querySelector("#advantages")).toBeNull();
  });

  it("keeps value-pricing copy accurate when the public model plaza is disabled", () => {
    renderApp();

    expect(screen.getByText("按实际配置结算")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "显示计费说明" })).toBeNull();
  });

  it("merges pricing and model plaza navigation without a separate advantages entry", async () => {
    renderApp(settings({ modelPlazaEnabled: true }));

    const navigation = within(
      screen.getByRole("navigation", { name: "主要导航" }),
    );
    const pricing = navigation.getByRole("link", { name: "定价｜模型广场" });
    expect(pricing.getAttribute("href")).toBe("#pricing");
    expect(navigation.queryByRole("link", { name: "模型广场" })).toBeNull();
    expect(navigation.queryByRole("link", { name: "优势" })).toBeNull();
    expect(document.querySelector('a[href="#advantages"]')).toBeNull();
    expect(
      (await screen.findByRole("link", { name: "查看模型" })).getAttribute("href"),
    ).toBe("#pricing");
  });

  it("uses configured documentation and brand imagery in local development", async () => {
    renderApp(
      settings({
        siteLogo: "https://cdn.01yapi.com/logo.svg",
        docUrl: "https://docs.01yapi.com/guide",
      }),
    );

    await screen.findByRole("link", { name: "零一 API 首页" });
    const logo = document.querySelector<HTMLImageElement>(".wordmark-logo");
    expect(logo).not.toBeNull();
    expect(logo?.src).toContain("cdn.01yapi.com");
    const footerLogo = document.querySelector<HTMLImageElement>(
      ".footer-brand-logo",
    );
    expect(footerLogo).not.toBeNull();
    expect(footerLogo?.src).toContain("cdn.01yapi.com");
    expect(
      screen
        .getAllByRole("link", { name: "文档" })
        .some(
          (link) =>
            link.getAttribute("href") === "https://docs.01yapi.com/guide",
        ),
    ).toBe(true);
    expect(
      screen.getByRole("link", { name: "查看文档" }).getAttribute("href"),
    ).toBe("https://docs.01yapi.com/guide");
  });

  it("uses resolved capability switches on the first render", () => {
    renderApp(
      settings({
        registrationEnabled: true,
        publicChannelStatusEnabled: true,
      }),
    );

    const navigation = within(
      screen.getByRole("navigation", { name: "主要导航" }),
    );
    expect(navigation.getByRole("link", { name: "登录" })).toBeTruthy();
    expect(navigation.getByRole("link", { name: "注册账号" })).toBeTruthy();
    expect(navigation.getByRole("link", { name: "渠道状态" })).toBeTruthy();
    expect(
      navigation.queryByRole("link", { name: "登录控制台" }),
    ).toBeNull();
  });

  it("opens and closes the mobile navigation with accessible state", async () => {
    const user = userEvent.setup();
    renderApp();

    const menuButton = screen.getByRole("button", { name: "打开导航" });
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");

    await user.click(menuButton);
    expect(
      screen
        .getByRole("button", { name: "关闭导航" })
        .getAttribute("aria-expanded"),
    ).toBe("true");
    expect(screen.getByRole("navigation", { name: "移动导航" })).toBeTruthy();

    const mobileNavigation = within(
      screen.getByRole("navigation", { name: "移动导航" }),
    );
    expect(
      mobileNavigation
        .getByRole("link", { name: "定价｜模型广场" })
        .getAttribute("href"),
    ).toBe("#pricing");
    expect(
      mobileNavigation.queryByRole("link", { name: "模型广场" }),
    ).toBeNull();
    expect(mobileNavigation.queryByRole("link", { name: "优势" })).toBeNull();

    const firstMobileLink = screen
      .getByRole("navigation", { name: "移动导航" })
      .querySelector("a")!;
    firstMobileLink.addEventListener(
      "click",
      (event) => event.preventDefault(),
      { once: true },
    );
    await user.click(firstMobileLink);
    expect(
      screen
        .getByRole("button", { name: "打开导航" })
        .getAttribute("aria-expanded"),
    ).toBe("false");
  });

  it("opens public announcements immediately before the login action", async () => {
    const user = userEvent.setup();
    mocks.fetchPublicAnnouncements.mockResolvedValue([
      {
        id: 1,
        title: "模型服务公告",
        content: "新的模型版本现已可用。",
      },
    ]);
    renderApp();

    const navigation = within(
      screen.getByRole("navigation", { name: "主要导航" }),
    );
    const announcementButton = navigation.getByRole("button", {
      name: "公告",
    });
    const loginLink = navigation.getByRole("link", { name: "登录控制台" });
    expect(
      announcementButton.compareDocumentPosition(loginLink) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(announcementButton.getAttribute("aria-expanded")).toBe("false");
    expect(announcementButton.getAttribute("aria-controls")).toBe(
      "public-announcements-dialog",
    );
    expect(mocks.fetchPublicAnnouncements).not.toHaveBeenCalled();

    await user.click(announcementButton);

    expect(mocks.fetchPublicAnnouncements).toHaveBeenCalledTimes(1);
    expect(
      await screen.findByRole("dialog", { name: "公告" }),
    ).toBeTruthy();
    expect(announcementButton.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByText("模型服务公告")).toBeTruthy();
    expect(screen.getByText("新的模型版本现已可用。")).toBeTruthy();

    await user.click(screen.getByRole("button", { name: "关闭公告" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(announcementButton.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(announcementButton);
  });

  it("keeps the announcement entry visible when an old backend lacks the public route", async () => {
    const user = userEvent.setup();
    mocks.fetchPublicAnnouncements.mockRejectedValue(
      new Error("Public announcements request failed"),
    );
    renderApp();

    const navigation = within(
      screen.getByRole("navigation", { name: "主要导航" }),
    );
    const announcementButton = navigation.getByRole("button", {
      name: "公告",
    });

    await user.click(announcementButton);

    expect(announcementButton).toBeTruthy();
    expect((await screen.findByRole("alert")).textContent).toContain(
      "暂时无法加载公告",
    );
    expect(screen.getByRole("button", { name: "重新加载" })).toBeTruthy();
  });

  it("opens the same public announcement dialog from the mobile navigation", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole("button", { name: "打开导航" }));
    const mobileNavigation = within(
      screen.getByRole("navigation", { name: "移动导航" }),
    );
    await user.click(mobileNavigation.getByRole("button", { name: "公告" }));

    await waitFor(() =>
      expect(
        screen
          .getByRole("button", { name: "打开导航" })
          .getAttribute("aria-expanded"),
      ).toBe("false"),
    );
    expect(
      await screen.findByRole("dialog", { name: "公告" }),
    ).toBeTruthy();
    expect(mocks.fetchPublicAnnouncements).toHaveBeenCalledTimes(1);
  });

  it("isolates background focus and traps keyboard navigation inside the mobile menu", async () => {
    const user = userEvent.setup();
    renderApp();

    const menuButton = screen.getByRole("button", { name: "打开导航" });
    const main = document.querySelector<HTMLElement>("main")!;
    const footer = document.querySelector<HTMLElement>("footer")!;
    const backgroundLink = screen.getByRole("link", { name: "查看接入方式" });

    await user.click(menuButton);

    const closeButton = screen.getByRole("button", { name: "关闭导航" });
    const mobileNavigation = screen.getByRole("navigation", {
      name: "移动导航",
    });
    const mobileLinks = [
      ...mobileNavigation.querySelectorAll<HTMLAnchorElement>("a[href]"),
    ];
    expect(document.activeElement).toBe(closeButton);
    expect(main.inert).toBe(true);
    expect(footer.inert).toBe(true);
    expect(document.body.classList.contains("mobile-menu-open")).toBe(true);

    await user.tab({ shift: true });
    expect(document.activeElement).toBe(mobileLinks[mobileLinks.length - 1]);

    await user.tab();
    expect(document.activeElement).toBe(closeButton);

    await user.tab();
    expect(document.activeElement).toBe(mobileLinks[0]);

    backgroundLink.focus();
    expect(document.activeElement).toBe(closeButton);

    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "打开导航" })).toBe(menuButton);
    expect(document.activeElement).toBe(menuButton);
    expect(main.inert).not.toBe(true);
    expect(footer.inert).not.toBe(true);
    expect(document.body.classList.contains("mobile-menu-open")).toBe(false);
  });

  it("closes the mobile menu and restores the page when the viewport becomes desktop-sized", async () => {
    const user = userEvent.setup();
    let breakpointListener: ((event: MediaQueryListEvent) => void) | undefined;
    vi.stubGlobal(
      "matchMedia",
      vi.fn(
        (query: string) =>
          ({
            matches: query === "(max-width: 767px)",
            media: query,
            onchange: null,
            addEventListener: (
              type: string,
              listener: EventListenerOrEventListenerObject,
            ) => {
              if (query === "(max-width: 767px)" && type === "change") {
                breakpointListener = listener as (
                  event: MediaQueryListEvent,
                ) => void;
              }
            },
            removeEventListener: vi.fn(),
            addListener: vi.fn(),
            removeListener: vi.fn(),
            dispatchEvent: vi.fn(),
          }) as MediaQueryList,
      ),
    );

    renderApp();
    const menuButton = screen.getByRole("button", { name: "打开导航" });
    const main = document.querySelector<HTMLElement>("main")!;
    const footer = document.querySelector<HTMLElement>("footer")!;

    await user.click(menuButton);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.classList.contains("mobile-menu-open")).toBe(true);
    expect(main.inert).toBe(true);
    expect(footer.inert).toBe(true);

    act(() => breakpointListener?.({ matches: false } as MediaQueryListEvent));

    await waitFor(() =>
      expect(menuButton.getAttribute("aria-expanded")).toBe("false"),
    );
    expect(document.body.style.overflow).toBe("");
    expect(document.body.classList.contains("mobile-menu-open")).toBe(false);
    expect(main.inert).not.toBe(true);
    expect(footer.inert).not.toBe(true);
    expect(document.activeElement).toBe(menuButton);
  });

  it("copies only the configured API address from the homepage and integration module", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    renderApp();

    await user.click(screen.getByRole("button", { name: "复制首页 API 地址" }));

    expect(writeText).toHaveBeenLastCalledWith("https://api.01yapi.com");
    expect(
      screen.getByRole("button", { name: "首页 API 地址已复制" }),
    ).toBeTruthy();
    expect(screen.getByText("已复制地址")).toBeTruthy();

    await user.click(screen.getByRole("button", { name: "复制接入 API 地址" }));

    expect(writeText).toHaveBeenLastCalledWith("https://api.01yapi.com");
    expect(
      screen.getByRole("button", { name: "接入 API 地址已复制" }),
    ).toBeTruthy();
  });

  it("renders only the four requested integration tabs and updates their guide", async () => {
    const user = userEvent.setup();
    renderApp();

    expect(
      screen.getAllByRole("tab").map((tab) => tab.textContent?.trim()),
    ).toEqual(["CC-Switch", "Codex++", "Codex CLI", "Claude Code CLI"]);
    expect(
      screen
        .getByRole("tab", { name: "CC-Switch" })
        .getAttribute("aria-selected"),
    ).toBe("true");
    expect(document.querySelector(".integration-description")).toBeNull();
    expect(screen.queryByRole("tab", { name: "Codex 桌面版" })).toBeNull();
    expect(screen.queryByRole("tab", { name: "cURL" })).toBeNull();
    expect(screen.queryByRole("tab", { name: "Python" })).toBeNull();
    expect(screen.queryByRole("tab", { name: "JavaScript" })).toBeNull();
    expect(screen.queryByRole("tab", { name: "Go" })).toBeNull();
    for (const tab of screen.getAllByRole("tab")) {
      const panelId = tab.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      expect(panel?.getAttribute("role")).toBe("tabpanel");
      expect(panel?.getAttribute("aria-labelledby")).toBe(tab.id);
    }

    await user.click(screen.getByRole("tab", { name: "Codex++" }));
    expect(
      screen.getByRole("heading", { name: "把零一 API 接入 Codex++" }),
    ).toBeTruthy();
    expect(document.querySelector(".integration-api-phrase")?.textContent).toBe(
      "把零一 API 接入",
    );
    expect(
      screen.getByRole("region", { name: "Codex++ 连接成功终端示例" }),
    ).toBeTruthy();
    expect(screen.getByRole("tabpanel").textContent).toContain("200 OK");
    expect(screen.getByRole("tabpanel").textContent).toContain(
      "https://api.01yapi.com/v1/messages",
    );
    expect(screen.queryByText("在零一 API 创建 API Key")).toBeNull();
    expect(screen.getByRole("link", { name: "查看接入教学文档" })).toBeTruthy();
    expect(document.querySelector('a[href^="ccswitch:"]')).toBeNull();
  });

  it("supports roving keyboard navigation and clears stale copy feedback", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    renderApp();

    const ccSwitchTab = screen.getByRole("tab", { name: "CC-Switch" });
    await user.click(ccSwitchTab);
    ccSwitchTab.focus();
    expect(ccSwitchTab.getAttribute("tabindex")).toBe("0");
    fireEvent.keyDown(ccSwitchTab, { key: "ArrowRight" });

    const codexPlusPlusTab = screen.getByRole("tab", { name: "Codex++" });
    expect(codexPlusPlusTab.getAttribute("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(codexPlusPlusTab);
    expect(ccSwitchTab.getAttribute("tabindex")).toBe("-1");

    await user.click(screen.getByRole("button", { name: "复制接入 API 地址" }));
    expect(
      screen.getByRole("button", { name: "接入 API 地址已复制" }),
    ).toBeTruthy();
    fireEvent.keyDown(codexPlusPlusTab, { key: "End" });
    const claudeTab = screen.getByRole("tab", { name: "Claude Code CLI" });
    expect(claudeTab.getAttribute("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(claudeTab);
    expect(
      screen.queryByRole("button", { name: "接入 API 地址已复制" }),
    ).toBeNull();
    fireEvent.keyDown(claudeTab, { key: "Home" });
    expect(ccSwitchTab.getAttribute("aria-selected")).toBe("true");
  });

  it("falls back to the quick-start anchor when no documentation URL is configured", async () => {
    renderApp(settings({ docUrl: "" }));

    const fallback = await screen.findByRole("link", { name: "查看接入方式" });
    expect(fallback.getAttribute("href")).toBe("#quick-start");
  });

  it("falls back from a failed configured logo to the bundled brand mark", async () => {
    renderApp(settings({ siteLogo: "/missing-logo.svg" }));

    await waitFor(() => {
      expect(
        document.querySelector<HTMLImageElement>(".wordmark-logo")?.src,
      ).toContain("missing-logo.svg");
    });
    const logo = document.querySelector<HTMLImageElement>(".wordmark-logo")!;

    fireEvent.error(logo);
    await waitFor(() => {
      const fallbackLogo =
        document.querySelector<HTMLImageElement>(".wordmark-logo");
      expect(fallbackLogo).not.toBeNull();
      expect(fallbackLogo?.src).not.toContain("missing-logo.svg");
    });
    expect(screen.getByRole("link", { name: "零一 API 首页" })).toBeTruthy();
  });
});
