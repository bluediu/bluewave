/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ICategoryProduct } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

/* Module: Types */
import { TFilter } from "@/Admin/types";

/* Types */
import { TScope } from "@/types";

interface IProps {
  enabled: boolean;
  categoryId: number;

  scope?: TScope;
  filterBy?: TFilter;
}

export const useCategoryProducts = (
  props: IProps,
): UseQueryResult<ICategoryProduct[], Error> => {
  const { enabled, categoryId, filterBy = "all", scope = "admin" } = props;

  const query = useQuery({
    queryKey: ["products", { categoryId }],
    queryFn: () =>
      adminActions.products.getProductsByCategory({
        id: +categoryId,
        filterBy,
        scope,
      }),
    enabled,
  });

  return query;
};
