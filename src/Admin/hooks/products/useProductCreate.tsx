/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "@/shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

export const useProductCreate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["product", "create"],
    mutationFn: adminActions.products.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      // Show success message.
      toast.success("Product successfully created.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
