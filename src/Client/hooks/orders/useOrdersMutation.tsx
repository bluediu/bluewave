import { useContext } from "react";

/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "../../../shared";

/* Hooks  */
import { useNavigate } from "react-router-dom";
import { AuthTableContext, CartContext } from "../../context";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { clientActions } from "../../services";

/* Constants */
import { ORDERS } from "../../constants";

export const useOrdersMutation = () => {
  /* Contexts */
  const { removeAllFromCart } = useContext(CartContext);
  const { code } = useContext(AuthTableContext);

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
