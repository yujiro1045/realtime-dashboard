import { useMemo } from "react";
import type { ICrypto } from "../interfaces/crypto.interface";

export const useFilter = (data: ICrypto[] = [], query: string) => {
  const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;

    return data.filter((item) => {
      const volume = String(item.volume24 || "").toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.symbol.toLowerCase().includes(q) ||
        volume.includes(q)
      );
    });
  }, [data, query]);

  return filteredData;
};
