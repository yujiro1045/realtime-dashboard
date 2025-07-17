import { useInfiniteQuery } from "@tanstack/react-query";
import { getCrypto } from "../services/getCrypto";
import { useMemo } from "react";

export const useCrypto = () => {
  const { data, ...res } = useInfiniteQuery({
    queryFn: () => getCrypto(),
    queryKey: ["cryptos"],
    initialPageParam: 1,
    getNextPageParam: () => {
      return 1;
    },
    getPreviousPageParam: () => {
      return 1;
    },
  });
  const dataModel = useMemo(() => {
    return data?.pages.flatMap((item) => item.data);
  }, [data]);
  return { ...res, data: dataModel };
};
