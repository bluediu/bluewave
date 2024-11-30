/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "@/shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

export const useClosePayment = (tableCode: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["close", "payment", { tableCode }],
    mutationFn: () => adminActions.transactions.closePayment(tableCode),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["payment"],
        refetchType: "all",
      });

      // Show success message.
      toast.success("Table and orders closed.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
