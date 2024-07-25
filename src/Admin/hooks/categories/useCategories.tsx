/*  Hooks */
import { useErrors } from "../../../hooks";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ICategory } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { TFilter } from "../../types";
import { TScope } from "../../../types";

export const useCategories = (
  filterBy: TFilter,
  scope: TScope = "admin",
): UseQueryResult<ICategory[], Error> => {
  const query = useQuery({
    queryKey: ["categories", { filterBy }],
    queryFn: () => adminActions.products.listCategories(filterBy, scope),
    refetchOnWindowFocus: false,
  });

  useErrors({ query });

  return query;
};
