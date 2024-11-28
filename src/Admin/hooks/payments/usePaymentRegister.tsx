/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "@/shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

export const usePaymentRegister = (code: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["payment", "register"],
    mutationFn: adminActions.transactions.registerPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["payment", { tableCode: code }],
      });

      // Show success message.
      toast.success("Payment successfully registered.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
