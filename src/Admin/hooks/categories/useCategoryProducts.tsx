/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ICategoryProduct } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

import { TScope } from "../../../types";

interface IProps {
  enabled: boolean;
  categoryId: number;
  scope?: TScope;
}

export const useCategoryProducts = (
  props: IProps,
): UseQueryResult<ICategoryProduct[], Error> => {
  const { enabled, categoryId, scope = "admin" } = props;

  const query = useQuery({
    queryKey: ["products", { categoryId }],
    queryFn: () =>
      adminActions.products.getProductsByCategory(+categoryId, scope),
    enabled,
  });

  return query;
};
