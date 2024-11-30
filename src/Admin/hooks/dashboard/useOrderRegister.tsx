/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "@/shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

export const useOrderRegister = (tableCode: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["table", "register"],
    mutationFn: adminActions.transactions.registerOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["productsOrder", { tableCode }],
      });

      queryClient.invalidateQueries({
        queryKey: ["orderState", { tableCode }],
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
