import { useMemo } from "react";
import type { ICrypto } from "../interfaces/crypto.interface";

export const useCurrencyFilter = (
  data: ICrypto[] = [],
  selectedCurrency: string
) => {
  const filteredData = useMemo(() => {
    if (!selectedCurrency || selectedCurrency === "all") return data;
    return data.filter(
      (item) => item.symbol.toLowerCase() === selectedCurrency.toLowerCase()
    );
  }, [data, selectedCurrency]);

  return filteredData;
};
