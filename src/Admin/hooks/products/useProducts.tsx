/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProduct } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { TFilter } from "../../types";

export const useProducts = (
  filterBy: TFilter,
): UseQueryResult<IProduct[], Error> => {
  const query = useQuery({
    queryKey: ["products", { filterBy }],
    queryFn: () => adminActions.products.listProducts(filterBy),
    refetchOnWindowFocus: false,
  });

  return query;
};
