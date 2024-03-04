/* Libs */
import { toast } from "react-toastify";

/* Components  */
import { Errors } from "../../../shared";

/* Hooks  */
import { useMutation, useQueryClient } from "@tanstack/react-query";

/* Interfaces */
import { IUser } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

export const useUserUpdate = (id: number) => {
  const queryClient = useQueryClient();

  const userUpdateMutation = useMutation({
    mutationKey: ["userUpdate", id],
    mutationFn: (user: IUser) => adminActions.users.updateUser({ id, user }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      // Show success message.
      toast.success("User successfully updated.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return userUpdateMutation;
};
