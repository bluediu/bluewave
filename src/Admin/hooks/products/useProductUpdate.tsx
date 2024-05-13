/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Interfaces */
import { IProductUpdate } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

export const useProductUpdate = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["productUpdate", id],
    mutationFn: (product: IProductUpdate) =>
      adminActions.products.updateProduct({ id, product }),
    onSuccess: () => {
      // Change this is not working, how it should be do it.
      queryClient.invalidateQueries({
        queryKey: ["products"],
        refetchType: "all",
      });

      // Show success message.
      toast.success("Product successfully updated.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
