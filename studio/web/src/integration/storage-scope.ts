export function databaseName(userId: number, name = "infinite-canvas") {
    if (!Number.isSafeInteger(userId) || userId <= 0) throw new Error("Invalid studio user");
    return `zero-one-studio:${userId}:${name}`;
}

export function createUserStorage(storage: Pick<Storage, "getItem" | "setItem" | "removeItem">, userId: number) {
    const prefix = `${databaseName(userId)}:`;
    return {
        getItem: (key: string) => storage.getItem(prefix + key),
        setItem: (key: string, value: string) => storage.setItem(prefix + key, value),
        removeItem: (key: string) => storage.removeItem(prefix + key),
    };
}
