/*  Hooks */
import { useQuery } from "@tanstack/react-query";

/* Module: Services */
import { adminActions } from "@/Admin/services";

export const useProductsInOrder = (tableCode: string): number[] => {
  const productInOrders = useQuery({
    queryKey: ["productInOrders"],
    queryFn: () =>
      adminActions.transactions.listProductsByTableOrder(tableCode, "client"),
    refetchOnWindowFocus: false,
  });

  const productInOrdersIds =
    productInOrders.data?.map((p) => p.product_id) ?? [];

  return productInOrdersIds;
};
