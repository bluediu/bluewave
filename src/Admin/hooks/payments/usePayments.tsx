/*  Hooks */
import { useErrors } from "@/hooks";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IPayment, IPaymentSearch } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

export const usePayments = (
  enabled: boolean,
  params: IPaymentSearch,
): UseQueryResult<IPayment[], Error> => {
  const query = useQuery({
    queryKey: ["payments", { params: params }],
    queryFn: () => adminActions.transactions.getPayments(params),
    refetchOnWindowFocus: false,
    enabled,
    retry: false,
  });

  useErrors({ query });

  return query;
};
