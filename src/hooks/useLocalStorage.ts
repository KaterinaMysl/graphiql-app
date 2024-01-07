import { useState } from 'react';

type LocalStorageHook<T> = readonly [T, (newValue: T) => void];

export function useLocalStorage<T>(
  keyName: string,
  defaultValue: T
): LocalStorageHook<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }

    setStoredValue(newValue);
  };

  return [storedValue, setValue] as const;
}
