/*  Hooks */
import { useErrors } from "@/hooks";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProduct, IProductFilterProps } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

export const useProducts = (
  props: IProductFilterProps,
): UseQueryResult<IProduct[], Error> => {
  const { filterBy, category, scope = "admin" } = props;

  const query = useQuery({
    queryKey: ["products", { filterBy, category }],
    queryFn: () =>
      adminActions.products.listProducts({ scope, filterBy, category }),
    refetchOnWindowFocus: false,
  });

  useErrors({ query });

  return query;
};
