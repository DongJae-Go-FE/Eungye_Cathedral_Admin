import { useState, useEffect } from "react";

interface debounceType<T> {
  value: T;
  delay?: number;
}

export default function useDebounce<T>({
  value,
  delay = 1000,
}: debounceType<T>): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
