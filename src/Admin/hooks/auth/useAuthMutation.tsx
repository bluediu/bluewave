import { useContext } from "react";

/* Components  */
import { Errors } from "../../../shared";

/* Hooks  */
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

/* Context */
import { AuthContext } from "../../context";

/* Services */
import { adminActions } from "../../services";

/* Constants */
import { TOKEN } from "../../constants";

export const useAuthMutation = () => {
  const { handleAuthUser } = useContext(AuthContext);

  const mutate = useMutation({
    mutationKey: ["authLogin"],
    mutationFn: adminActions.users.authLogin,
    onSuccess: (data) => {
      // Save user token on login.
      localStorage.setItem(TOKEN, data.access);
      // Save user auth info in context API.
      handleAuthUser({ userAuthId: data.user_id, superuser: data.superuser });
      // Show authentication message.
      toast.success("Login successful.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />);
    },
  });

  return mutate;
};
