import { AsyncLocalStorage } from "node:async_hooks";

type AsyncLocalStorageType = {
    corelationId: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationId = (): string | undefined => {
    const store = asyncLocalStorage.getStore();
    return store?.corelationId;
}