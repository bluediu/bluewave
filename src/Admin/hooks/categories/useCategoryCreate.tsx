/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../services";

export const useCategoryCreate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["categoryCreate"],
    mutationFn: adminActions.categories.createCategory,
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
