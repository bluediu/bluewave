/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProductOrder, IOrderState } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

interface IOutputProps {
  productOrderQuery: UseQueryResult<IProductOrder[], Error>;
  orderStateQuery: UseQueryResult<IOrderState, Error>;
}

export const useProductsOrder = (tableCode: string): IOutputProps => {
  const productOrderQuery = useQuery({
    queryKey: ["productsOrder", { tableCode }],
    queryFn: () =>
      adminActions.transactions.listProductsByTableOrder(tableCode),
    refetchOnWindowFocus: false,
  });

  const orderStateQuery = useQuery({
    queryKey: ["orderState", { tableCode }],
    queryFn: () => adminActions.transactions.getOrderState(tableCode),
    refetchOnWindowFocus: false,
    enabled: !productOrderQuery.isLoading,
  });

  return { productOrderQuery, orderStateQuery };
};
