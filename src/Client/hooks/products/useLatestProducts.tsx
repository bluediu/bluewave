/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ILatest } from "../../interfaces";

/* Services */
import { clientActions } from "../../services";

/* Constants */
import { STALE_TIME } from "../../../constants";

export const useLatestProducts = (): UseQueryResult<ILatest[], Error> => {
  const query = useQuery({
    queryKey: ["latest"],
    queryFn: () => clientActions.products.listLatest(),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
