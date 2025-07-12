import { useEffect, useState } from "react";

type Props = {
  value: string;
  delay: number;
};

export default function useDebounce({ value, delay = 1000 }: Props) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [delay, value]);
  return debouncedValue;
}
