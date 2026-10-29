import { goToLogin, LoginRequired, validateSession, watchSession } from "./integration/session";

async function start() {
    try {
        await validateSession();
        watchSession();
        await import("./main");
    } catch (error) {
        if (error instanceof LoginRequired) return goToLogin();
        const root = document.getElementById("root")!;
        root.replaceChildren();
        const message = document.createElement("p");
        message.textContent = "画布暂时无法打开，请检查网络后重试。";
        const retry = document.createElement("button");
        retry.textContent = "重新加载";
        retry.onclick = () => location.reload();
        const back = document.createElement("a");
        back.href = "/dashboard";
        back.textContent = "返回控制台";
        root.append(message, retry, back);
    }
}

void start();
