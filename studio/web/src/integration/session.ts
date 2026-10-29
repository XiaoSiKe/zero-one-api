import { refreshAuthTokens } from "../../../../frontend/src/api/tokenRefresh";
import { getStudioUser, IdentityChanged, setStudioUser, type StudioUser } from "./identity";

export class LoginRequired extends Error {}

export async function siteRequest<T>(path: string, signal?: AbortSignal): Promise<T> {
    const token = localStorage.getItem("auth_token");
    if (!token) throw new LoginRequired();
    const savedUserId = readSavedUserId();
    const request = (accessToken: string) => fetch(`/api/v1${path}`, {
        headers: { Authorization: `Bearer ${accessToken}` }, cache: "no-store", signal,
    });
    let response = await request(token);
    if (response.status === 401) {
        let refreshed;
        try {
            refreshed = await refreshAuthTokens({ failedAccessToken: token });
        } catch {
            throw new LoginRequired();
        }
        response = await request(refreshed.access_token);
    }
    if (response.status === 401) throw new LoginRequired();
    if (!response.ok) throw new Error(`站点请求失败（${response.status}），请稍后重试。`);
    const payload = await response.json();
    if (readSavedUserId() !== savedUserId) throw new IdentityChanged();
    if (payload.code !== 0 || !payload.data) throw new Error(payload.message || "站点返回了无效数据。");
    return payload.data as T;
}

export async function validateSession() {
    const user = await siteRequest<StudioUser>("/auth/me");
    setStudioUser(user);
    return user;
}

export function goToLogin() {
    document.getElementById("root")?.replaceChildren();
    location.replace(`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`);
}

export function watchSession() {
    const userId = getStudioUser().id;
    const revalidate = () => {
        if (document.visibilityState === "hidden") return;
        void validateSession().catch((error) => {
            if (error instanceof LoginRequired) goToLogin();
            // An identity change must discard all mounted stores and credentials.
            else if (error instanceof IdentityChanged || readSavedUserId() !== userId) {
                document.getElementById("root")?.replaceChildren();
                location.reload();
            }
        });
    };
    window.addEventListener("storage", (event) => {
        if (event.key === null || event.key === "auth_user" || event.key === "auth_token") {
            if (!localStorage.getItem("auth_token")) goToLogin();
            else if (readSavedUserId() !== userId) {
                document.getElementById("root")?.replaceChildren();
                location.reload();
            }
        }
    });
    window.addEventListener("focus", revalidate);
    document.addEventListener("visibilitychange", revalidate);
    // Same user refresh cadence as the Console auth store.
    let interval: ReturnType<typeof setInterval> | undefined;
    const startCadence = () => { interval ??= setInterval(revalidate, 60_000); };
    startCadence();
    window.addEventListener("pageshow", () => { startCadence(); revalidate(); });
    window.addEventListener("pagehide", () => { clearInterval(interval); interval = undefined; });
}

function readSavedUserId() {
    try { return JSON.parse(localStorage.getItem("auth_user") || "null")?.id; }
    catch { return undefined; }
}
