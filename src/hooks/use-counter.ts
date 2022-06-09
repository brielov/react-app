import { useCallback, useState } from "react";

export function useCounter(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue);

  const increment = useCallback(
    (by = 1) => setCount((count) => count + by),
    [],
  );

  const decrement = useCallback(
    (by = 1) => setCount((count) => count - by),
    [],
  );

  const reset = useCallback(
    (value = defaultValue) => setCount(value),
    [defaultValue],
  );

  return { count, increment, decrement, reset } as const;
}
