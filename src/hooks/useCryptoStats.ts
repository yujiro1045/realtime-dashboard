import { useQuery } from "@tanstack/react-query";
import { getCrypto } from "../services/getCrypto";

export const useCryptoStats = () => {
  return useQuery({
    queryKey: ["crypto-stats"],
    queryFn: getCrypto,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
  });
};
