/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

export const useOrdersPayment = (code: string) => {
  const query = useQuery({
    queryKey: ["orders", "payment", { code }],
    queryFn: () => adminActions.transactions.getOrdersByPayment(code),
    refetchOnWindowFocus: false,
  });

  return query;
};
