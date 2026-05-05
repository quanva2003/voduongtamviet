import { useEffect, useLayoutEffect } from "react";

/* useLayoutEffect that falls back to useEffect on the server to avoid
   the React SSR warning. Use for DOM measurements / synchronous mutations. */
export const useIsomorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
