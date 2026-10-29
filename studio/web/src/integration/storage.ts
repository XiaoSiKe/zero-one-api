import { getStudioUser } from "./identity";
import { createUserStorage, databaseName } from "./storage-scope";

// These modules are imported only after the server has authenticated the identity.
// Capture one identity for the document, including pending IndexedDB writes.
const userId = getStudioUser().id;
export const userStorage = createUserStorage(window.localStorage, userId);
export const userDatabaseName = (name = "infinite-canvas") => databaseName(userId, name);
