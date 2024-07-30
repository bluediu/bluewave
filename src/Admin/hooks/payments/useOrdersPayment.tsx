/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../services";

export const useOrdersPayment = (code: string) => {
  const query = useQuery({
    queryKey: ["ordersPayment", { code }],
    queryFn: () => adminActions.transactions.getOrdersByPayment(code),
    refetchOnWindowFocus: false,
  });

  return query;
};
