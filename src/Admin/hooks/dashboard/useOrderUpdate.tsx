/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "@/shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Interfaces */
import { IOrderUpdate } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

interface IProps {
  orderCode: string;
  toRefetchTable: string;
}

export const useOrderUpdate = ({ orderCode, toRefetchTable }: IProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["table", "update", orderCode],
    mutationFn: (order: IOrderUpdate) =>
      adminActions.transactions.updateOrder({ code: orderCode, order }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["productsOrder", { tableCode: toRefetchTable }],
      });

      queryClient.invalidateQueries({
        queryKey: ["orderState", { tableCode: toRefetchTable }],
      });

      // Show success message.
      toast.success("Order successfully updated.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
