import { StudioSiteBar } from "@/integration/site-bar";
import type { ReactNode } from "react";
import { lazy, Suspense } from "react";

import { AppTopNav } from "@/components/layout/app-top-nav";
import { useAgentStore } from "@/stores/use-agent-store";

const AgentPanel = lazy(() => import("@/components/agent/agent-panel").then((module) => ({ default: module.AgentPanel })));

export default function UserLayout({ children }: { children: ReactNode }) {
    const panelMounted = useAgentStore((state) => state.panelMounted);
    return (
        <div className="flex h-dvh overflow-hidden bg-background text-foreground">
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                <StudioSiteBar />
                <AppTopNav />
                <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
            </div>
            {panelMounted && <Suspense fallback={null}><AgentPanel /></Suspense>}
        </div>
    );
}
