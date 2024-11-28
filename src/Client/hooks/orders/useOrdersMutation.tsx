/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "@/shared";

/* Hooks  */
import { useNavigate } from "react-router-dom";

import { useCartContext } from "../useCartContext";
import { useTableContext } from "../useTableContext";

import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { clientActions } from "@/Client/services";

/* Constants */
import { ORDERS } from "@/Client/constants";

export const useOrdersMutation = () => {
  // Context
  const { removeAllFromCart } = useCartContext();
  const { table } = useTableContext();

  const code = table!.code;

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["useOrdersMutation"],
    mutationFn: clientActions.orders.registerBulkOrders,
    onSuccess: () => {
      // Refresh data.
      queryClient.refetchQueries({
        queryKey: ["productsOrder", { tableCode: code }],
      });

      queryClient.invalidateQueries({
        queryKey: ["orderCount", { tableCode: code }],
      });

      removeAllFromCart();
      navigate(ORDERS);
      // Show success message.
      toast.success("Orders successfully created.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
