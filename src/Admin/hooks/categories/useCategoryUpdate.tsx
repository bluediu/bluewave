/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Interfaces */
import { ICategoryUpdate } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

export const useCategoryUpdate = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["categoryUpdate", id],
    mutationFn: (category: ICategoryUpdate) =>
      adminActions.products.updateCategory({ id, category }),
    onSuccess: () => {
      // Change this is not working, how it should be do it.
      queryClient.invalidateQueries({
        queryKey: ["categories"],
        refetchType: "all",
      });

      // Show success message.
      toast.success("Category successfully updated.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
