import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import type { FilterState } from "./filter-articles";

export function useArticleFilter(): [FilterState, (next: Partial<FilterState>) => void] {
  const [params, setParams] = useSearchParams();

  const filter: FilterState = {
    category: params.get("category") ?? "all",
    search: params.get("search") ?? "",
  };

  const setFilter = useCallback(
    (next: Partial<FilterState>) => {
      setParams(
        (prev) => {
          const updated = new URLSearchParams(prev);
          if (next.category !== undefined) {
            if (next.category && next.category !== "all") {
              updated.set("category", next.category);
            } else {
              updated.delete("category");
            }
          }
          if (next.search !== undefined) {
            if (next.search) {
              updated.set("search", next.search);
            } else {
              updated.delete("search");
            }
          }
          return updated;
        },
        { replace: true },
      );
    },
    [setParams],
  );

  return [filter, setFilter];
}
