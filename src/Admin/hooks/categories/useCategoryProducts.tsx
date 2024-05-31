/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ICategoryProduct } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

export const useCategoryProducts = (
  enabled: boolean = true,
  categoryId: number,
): UseQueryResult<ICategoryProduct[], Error> => {
  const query = useQuery({
    queryKey: ["products", { categoryId }],
    queryFn: () => adminActions.products.getProductsByCategory(+categoryId),
    enabled,
  });

  return query;
};
