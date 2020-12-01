import { LocalStorageKey } from './localStorageKey';

class LocalStorageService {
    public set(key: LocalStorageKey, value: any): void {
        localStorage.setItem(key, value);
    }

    public get(key: LocalStorageKey): string | null {
        return localStorage.getItem(key);
    }

    public setObject<T = any>(key: LocalStorageKey, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public getObject<T>(key: LocalStorageKey): T | null {
        const value = localStorage.getItem(key);
        if (typeof value === 'string') {
            if (value === 'null') {
                return null;
            }

            return JSON.parse(value) as T;
        }

        return value;
    }

    public getObjectDefault<T>(key: LocalStorageKey, defaultValue: T): T {
        const val = this.getObject<T>(key);
        if (val !== null && typeof val !== 'undefined') {
            return val;
        }

        return defaultValue;
    }

    public removeItem(key: LocalStorageKey): void {
        localStorage.removeItem(key);
    }
}

export const localStorageService = new LocalStorageService();
