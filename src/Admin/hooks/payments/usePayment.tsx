/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

/* Types */
import { TScope } from "@/types";

export const usePayment = (tableCode: string, scope: TScope = "admin") => {
  const {
    isLoading,
    isError,
    error,
    data: payment,
  } = useQuery({
    queryKey: ["payment", { tableCode }],
    queryFn: () => adminActions.transactions.getPayment(tableCode, scope),
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

  return { isLoading, isError, error, payment };
};
