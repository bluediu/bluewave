/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../services";

export const useTableCreate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["tableCreate"],
    mutationFn: adminActions.tables.createTable,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tables"] });
      // Show success message.
      toast.success("Table successfully created.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
