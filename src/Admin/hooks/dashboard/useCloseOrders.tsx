/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../services";

export const useCloseOrders = (tableCode: string) => {
  const mutation = useMutation({
    mutationKey: ["closeOrders", { tableCode }],
    mutationFn: () => adminActions.transactions.closeOrders(tableCode),
    onSuccess: () => {
      // Show success message.
      toast.success("Canceled orders closed.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
