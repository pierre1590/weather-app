import { useCallback } from "react";

import { debounce } from "lodash";

export function useDebounce(callback, delay) {
  const debounceCallback = useCallback(debounce(callback, delay), [delay]);
  return debounceCallback;
}
