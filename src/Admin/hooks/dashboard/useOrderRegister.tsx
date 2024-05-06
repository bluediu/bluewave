/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../services";

export const useOrderRegister = (code: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["tableRegister"],
    mutationFn: adminActions.transactions.registerOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["productsOrder", { tableCode: code }],
      });

      queryClient.invalidateQueries({
        queryKey: ["orderState", { tableCode: code }],
      });

      // Show success message.
      toast.success("Order successfully registered.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
