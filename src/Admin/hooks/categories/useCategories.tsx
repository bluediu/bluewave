/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ICategory } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { TFilter } from "../../types";

export const useCategories = (
  filterBy: TFilter,
): UseQueryResult<ICategory[], Error> => {
  const query = useQuery({
    queryKey: ["categories", { filterBy }],
    queryFn: () => adminActions.categories.listCategories(filterBy),
    refetchOnWindowFocus: false,
  });

  return query;
};
