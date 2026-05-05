import { useState, useCallback } from "react";

import { useIsomorphicEffect } from "./use-isomorphic-effect";

type Serializer<T> = {
  read: (raw: string) => T;
  write: (value: T) => string;
};

const jsonSerializer: Serializer<unknown> = {
  read: (raw) => JSON.parse(raw) as unknown,
  write: (value) => JSON.stringify(value),
};

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  serializer: Serializer<T> = jsonSerializer as Serializer<T>,
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useIsomorphicEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        setStoredValue(serializer.read(item));
      }
    } catch {
      // localStorage may be blocked (private mode, security policy)
    }
  }, [key]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        const next = value instanceof Function ? value(storedValue) : value;
        window.localStorage.setItem(key, serializer.write(next));
        setStoredValue(next);
      } catch {
        // ignore write errors
      }
    },
    [key, serializer, storedValue],
  );

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch {
      // ignore
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
