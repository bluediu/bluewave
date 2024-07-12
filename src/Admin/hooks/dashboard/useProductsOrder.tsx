/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProductOrder, IOrderState } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { TScope } from "../../../types";

interface InputProps {
  tableCode: string;
  scope?: TScope;
}

interface IOutputProps {
  productOrderQuery: UseQueryResult<IProductOrder[], Error>;
  orderStateQuery: UseQueryResult<IOrderState, Error>;
  isLoadingData: boolean;
  existingProducts: boolean;
  canGenerateBill: boolean;
}

export const useProductsOrder = (props: InputProps): IOutputProps => {
  const { tableCode, scope = "admin" } = props;

  const productOrderQuery = useQuery({
    queryKey: ["productsOrder", { tableCode }],
    queryFn: () =>
      adminActions.transactions.listProductsByTableOrder(tableCode, scope),
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

  const orderStateQuery = useQuery({
    queryKey: ["orderState", { tableCode }],
    queryFn: () => adminActions.transactions.getOrderState(tableCode, scope),
    refetchOnWindowFocus: false,
    enabled: !productOrderQuery.isLoading,
    refetchInterval: 5000,
  });

  const isLoadingData =
    productOrderQuery.isLoading || orderStateQuery.isPending;

  const existingProducts = !!productOrderQuery.data?.length;

  const canGenerateBill =
    !orderStateQuery.data?.count_pending && existingProducts;

  return {
    productOrderQuery,
    orderStateQuery,
    isLoadingData,
    existingProducts,
    canGenerateBill,
  };
};
