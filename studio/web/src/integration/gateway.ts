import type { ApiKey } from "@/types";
import { keyAllowsImageGeneration } from "../../../../frontend/src/features/online-image/access";
import { siteRequest } from "./session";
import { getStudioUser } from "./identity";
import { guessCapability, type ChannelModel } from "@/stores/use-config-store";

export function keyAvailable(key: ApiKey) {
    return key.user_id === getStudioUser().id && key.status === "active" && key.group?.status === "active"
        && ["openai", "grok"].includes(key.group.platform)
        && (!key.expires_at || Date.parse(key.expires_at) > Date.now())
        && (!key.quota || key.quota_used < key.quota);
}

export async function listStudioKeys(signal: AbortSignal) {
    const keys: ApiKey[] = [];
    for (let page = 1; ; page++) {
        // Use the Console's canonical paginated key interface and page size.
        const result = await siteRequest<{ items: ApiKey[]; pages: number }>(`/keys?page=${page}&page_size=100&status=active`, signal);
        keys.push(...result.items.filter(keyAvailable));
        if (page >= result.pages || !result.items.length) return keys;
    }
}

export async function discoverKeyModels(key: ApiKey, signal: AbortSignal): Promise<ChannelModel[]> {
    if (!keyAvailable(key)) throw new Error("该密钥当前不可用，请重新选择。");
    const response = await fetch("/v1/models", {
        headers: { Authorization: `Bearer ${key.key}` }, cache: "no-store", signal,
    });
    if (!response.ok) throw new Error(`读取模型失败（${response.status}），请检查密钥权限后重试。`);
    const result = await response.json();
    if (!Array.isArray(result.data)) throw new Error("模型目录格式不正确。");
    const models = new Map<string, ChannelModel>();
    for (const item of result.data) {
        if (typeof item.id !== "string" || !item.id.trim()) continue;
        const capability = guessCapability(item.id);
        // Video/audio are connected later through a separately configured channel.
        if (capability === "video" || capability === "audio") continue;
        if (capability === "image" && !keyAllowsImageGeneration(key)) continue;
        models.set(item.id, { name: item.id, capability });
    }
    if (!models.size) throw new Error("该密钥没有可用的图片或对话模型，请换一个分组的密钥。");
    return [...models.values()];
}
