/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "@/shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

export const useCategoryCreate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["category", "create"],
    mutationFn: adminActions.products.createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      // Show success message.
      toast.success("Category successfully created.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
