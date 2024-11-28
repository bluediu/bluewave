/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { useErrors } from "@/hooks";

/* Interfaces */
import { ICategory } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

/* Types */
import { TScope } from "@/types";

import { TFilter } from "@/Admin/types";

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
