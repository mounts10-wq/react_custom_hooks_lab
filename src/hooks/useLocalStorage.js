import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Read an existing value from localStorage first.
  // If no value exists, use the provided initial value.
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  // Keep localStorage updated whenever the key or state changes.
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  // Return state + setter, just like useState.
  return [state, setState];
}
``