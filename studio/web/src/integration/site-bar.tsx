import { useEffect, useRef, useState } from "react";
import { Alert, Button, Modal, Select } from "antd";
import type { ApiKey } from "@/types";
import { discoverKeyModels, listStudioKeys } from "./gateway";
import { getStudioUser } from "./identity";
import { goToLogin, LoginRequired } from "./session";
import { flushCanvasSave, useCanvasSaveStatus } from "./canvas-save";
import { encodeChannelModel, modelOptionsFromChannels, useConfigStore } from "@/stores/use-config-store";

export function StudioSiteBar() {
    const saveStatus = useCanvasSaveStatus();
    const [open, setOpen] = useState(false);
    const [keys, setKeys] = useState<ApiKey[]>([]);
    const [selected, setSelected] = useState<number>();
    const [loading, setLoading] = useState(false);
    const [connecting, setConnecting] = useState(false);
    const [error, setError] = useState("");
    const controller = useRef<AbortController | null>(null);
    const channels = useConfigStore((state) => state.config.channels);
    const connected = channels.find((channel) => channel.id.startsWith("zero-one-key-") && channel.apiKey);

    const load = async () => {
        controller.current?.abort();
        const request = new AbortController();
        controller.current = request;
        setLoading(true);
        setSelected(undefined);
        setKeys([]);
        setError("");
        try { setKeys(await listStudioKeys(request.signal)); }
        catch (reason) {
            if (request.signal.aborted) return;
            if (reason instanceof LoginRequired) return goToLogin();
            setError(reason instanceof Error ? reason.message : "读取密钥失败，请重试。");
        } finally { if (!request.signal.aborted) setLoading(false); }
    };

    useEffect(() => {
        if (open) void load();
        return () => controller.current?.abort();
    }, [open]);

    const connect = async () => {
        const key = keys.find((item) => item.id === selected);
        if (!key) return;
        const request = controller.current!;
        setConnecting(true);
        setError("");
        try {
            const models = await discoverKeyModels(key, request.signal);
            if (request.signal.aborted) return;
            const channel = { id: `zero-one-key-${key.id}`, name: `零一 API · ${key.name}`, baseUrl: location.origin, apiKey: key.key, apiFormat: "openai" as const, models };
            const current = useConfigStore.getState().config;
            const nextChannels = [channel, ...current.channels.filter((item) => !item.id.startsWith("zero-one-key-") && item.id !== "default")];
            const first = (capability: string) => {
                const model = models.find((item) => item.capability === capability);
                return model ? encodeChannelModel(channel.id, model.name) : "";
            };
            useConfigStore.setState({ config: {
                ...current, channels: nextChannels, models: modelOptionsFromChannels(nextChannels),
                model: first("image"), imageModel: first("image"), textModel: first("text"),
                videoModel: "", audioModel: "", proxyEnabled: false,
            } });
            setOpen(false);
        } catch (reason) {
            if (!request.signal.aborted) setError(reason instanceof Error ? reason.message : "接入失败，请重试。");
        } finally { setConnecting(false); }
    };

    return <>
        <div className="flex min-h-11 shrink-0 flex-wrap items-center justify-between gap-2 border-b border-stone-200 px-3 py-1 text-xs dark:border-stone-800" data-studio-site-bar>
            <div className="flex min-w-0 items-center gap-3">
                <a href={getStudioUser().role === "admin" ? "/admin/dashboard" : "/dashboard"} className="shrink-0 text-inherit hover:underline" onClick={(event) => {
                    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                    event.preventDefault();
                    const target = event.currentTarget.href;
                    void flushCanvasSave().then(() => location.assign(target)).catch((reason) => { setError(reason.message); setOpen(true); });
                }}>← 零一控制台</a>
                <span className={saveStatus === "error" ? "text-red-500" : "text-stone-500"} role="status">{saveStatus === "saving" ? "正在保存画布…" : saveStatus === "error" ? "保存失败，请导出作品" : "当前浏览器保存 · 请定期导出"}</span>
            </div>
            <Button size="small" onClick={() => { setSelected(undefined); setOpen(true); }}>{connected ? "切换站内密钥" : "接入站内密钥"}</Button>
        </div>
        <Modal title="接入零一 API" open={open} onCancel={() => setOpen(false)} footer={<>
            <Button onClick={() => void load()} disabled={loading || connecting}>刷新密钥</Button>
            <Button type="primary" loading={connecting} disabled={!selected || loading} onClick={() => void connect()}>接入并读取模型</Button>
        </>}>
            <p className="mb-4 text-sm leading-6">选择自己的 API Key，图片与对话请求按该密钥所属分组正常计费。密钥和作品保存在当前浏览器中，并按登录用户隔离；换设备后可通过画布导入恢复作品。</p>
            {error && <Alert type="error" showIcon message={error} className="mb-3" />}
            <Select aria-label="站内 API Key" className="w-full" loading={loading} value={selected} onChange={setSelected} placeholder={loading ? "正在读取…" : "选择可用的 OpenAI / Grok 分组密钥"} options={keys.map((key) => ({ value: key.id, label: `${key.name} · ${key.group?.name}` }))} />
            {!loading && !error && !keys.length && <p className="mt-3">还没有可用密钥。<a href="/keys" className="underline">去密钥管理创建</a>，然后回来刷新。</p>}
            <p className="mt-4 text-sm text-stone-500">视频 API 尚未接入。画布编排、图片/视频素材导入和导出均可先使用；后续可在配置中添加视频渠道。</p>
        </Modal>
    </>;
}
