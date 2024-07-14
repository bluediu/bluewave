/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ICategoryProduct } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Module: Types */
import { TFilter } from "../../types";

/* Types */
import { TScope } from "../../../types";

interface IProps {
  enabled: boolean;
  categoryId: number;
  filterBy?: TFilter;
  scope?: TScope;
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
