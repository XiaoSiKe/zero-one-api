export type StudioUser = { id: number; email?: string; username?: string; role?: string };

let identity: StudioUser | undefined;
export class IdentityChanged extends Error {}

export function setStudioUser(user: StudioUser) {
    if (!Number.isSafeInteger(user.id) || user.id <= 0) throw new Error("无法确认当前用户，请重新登录。");
    if (identity && identity.id !== user.id) throw new IdentityChanged("登录用户已变更，请重新打开画布。");
    identity = user;
}

export function getStudioUser() {
    if (!identity) throw new Error("请先登录零一 API。");
    return identity;
}
