/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Interfaces */
import { ITableUpdate } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

export const useTableUpdate = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["tableUpdate", id],
    mutationFn: (table: ITableUpdate) =>
      adminActions.transactions.updateTable({ id, table }),
    onSuccess: () => {
      // Change this is not working, how it should be do it.
      queryClient.invalidateQueries({
        queryKey: ["tables"],
        refetchType: "all",
      });

      // Show success message.
      toast.success("Table successfully updated.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
