/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "@/shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Interfaces */
import { ITableUpdate } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

export const useTableUpdate = (id: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["table", "update", id],
    mutationFn: (table: ITableUpdate) =>
      adminActions.tables.updateTable({ id, table }),
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
