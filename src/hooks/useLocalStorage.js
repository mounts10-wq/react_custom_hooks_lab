import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Initialize state from localStorage if a value exists,
  // otherwise fall back to the provided initialValue.
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  // Keep localStorage in sync whenever the key or state changes.
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  // Return state and the setter function just like useState.
  return [state, setState];
}