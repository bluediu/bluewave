/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Services */
import { clientActions } from "../../services";

export const useOrderCount = (code: string) => {
  const query = useQuery({
    queryKey: ["orderCount", { tableCode: code }],
    queryFn: () => clientActions.orders.getOrderCount(code),
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

  return query;
};
