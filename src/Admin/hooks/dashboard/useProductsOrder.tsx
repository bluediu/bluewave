/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProductOrder } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

export const useProductsOrder = (
  tableCode: string,
): UseQueryResult<IProductOrder[], Error> => {
  const query = useQuery({
    queryKey: ["productsOrder", { tableCode }],
    queryFn: () =>
      adminActions.transactions.listProductsByTableOrder(tableCode),
    refetchOnWindowFocus: false,
  });

  return query;
};
