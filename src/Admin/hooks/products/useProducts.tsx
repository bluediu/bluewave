/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProduct } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { TFilter } from "../../types";
import { TScope } from "../../../types";

export const useProducts = (
  filterBy: TFilter,
  scope: TScope = "admin",
): UseQueryResult<IProduct[], Error> => {
  const query = useQuery({
    queryKey: ["products", { filterBy }],
    queryFn: () => adminActions.products.listProducts(filterBy, scope),
    refetchOnWindowFocus: false,
  });

  return query;
};
