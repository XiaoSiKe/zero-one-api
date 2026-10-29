import { strict as assert } from "node:assert";
import { test } from "node:test";
import { createUserStorage, databaseName } from "../src/integration/storage-scope.ts";
import { getStudioUser, setStudioUser } from "../src/integration/identity.ts";

test("browser credentials and config remain separate for two users", () => {
    const data = new Map<string, string>([["auth_token", "console-token"]]);
    const storage = { getItem: (key: string) => data.get(key) ?? null, setItem: (key: string, value: string) => { data.set(key, value); }, removeItem: (key: string) => { data.delete(key); } };
    const alice = createUserStorage(storage, 1);
    const bob = createUserStorage(storage, 2);
    alice.setItem("api-config", "alice-key");
    bob.setItem("api-config", "bob-key");
    assert.equal(alice.getItem("api-config"), "alice-key");
    assert.equal(bob.getItem("api-config"), "bob-key");
    alice.removeItem("api-config");
    assert.equal(alice.getItem("api-config"), null);
    assert.equal(bob.getItem("api-config"), "bob-key");
    assert.equal(data.get("auth_token"), "console-token");
    assert.notEqual(databaseName(1), databaseName(2));
    assert.notEqual(databaseName(1), databaseName(1, "infinite-canvas-plugins"));
});

test("unverified or changed identities cannot hydrate another user's stores", () => {
    assert.throws(() => getStudioUser());
    assert.throws(() => databaseName(0));
    assert.throws(() => databaseName(NaN));
    assert.throws(() => setStudioUser({ id: -1 }));
    setStudioUser({ id: 42 });
    assert.equal(getStudioUser().id, 42);
    assert.doesNotThrow(() => setStudioUser({ id: 42 }));
    assert.throws(() => setStudioUser({ id: 43 }));
});
