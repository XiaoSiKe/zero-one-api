import { useSyncExternalStore } from "react";
import { localForageStorage } from "@/lib/localforage-storage";

let queued: { name: string; value: unknown } | undefined;
let writing: Promise<void> | undefined;
let status: "saved" | "saving" | "error" = "saved";
const listeners = new Set<() => void>();

function report(next: typeof status) {
    status = next;
    listeners.forEach((listener) => listener());
}

export function queueCanvasSave(name: string, value: unknown) {
    queued = { name, value };
    report("saving");
    if (writing) return;
    writing = (async () => {
        while (queued) {
            const current = queued;
            queued = undefined;
            await localForageStorage.setItem(current.name, JSON.stringify(current.value));
        }
        report("saved");
    })().catch(() => report("error")).finally(() => { writing = undefined; });
}

export async function flushCanvasSave() {
    await writing;
    if (status === "error") throw new Error("画布保存失败，请留在当前页面并导出作品。");
}

export function useCanvasSaveStatus() {
    return useSyncExternalStore((listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    }, () => status);
}
