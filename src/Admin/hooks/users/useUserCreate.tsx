/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../services";

export const useUserCreate = () => {
  const queryClient = useQueryClient();

  const userCreateMutation = useMutation({
    mutationKey: ["userCreate"],
    mutationFn: adminActions.users.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      // Show success message.
      toast.success("User successfully created.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return { userCreateMutation };
};
