/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ILatest } from "@/Client/interfaces";

/* Services */
import { clientActions } from "@/Client/services";

/* Constants */
import { STALE_TIME } from "@/constants";

export const useLatestProducts = (): UseQueryResult<ILatest[], Error> => {
  const query = useQuery({
    queryKey: ["latest"],
    queryFn: () => clientActions.products.listLatest(),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
