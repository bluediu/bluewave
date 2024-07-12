/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IPayment } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  payment?: IPayment;
}

export const usePayment = (tableCode: string): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: payment,
  } = useQuery({
    queryKey: ["payment", { tableCode }],
    queryFn: () => adminActions.transactions.getPayment(tableCode),
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

  return { isLoading, isError, error, payment };
};
