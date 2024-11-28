/* Components  */
import { Errors } from "@/shared";

/* Hooks  */
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import { useAuthContext } from "../useAuthContext";

/* Services */
import { adminActions } from "@/Admin/services";

/* Constants */
import { TOKEN } from "@/Admin/constants";

export const useAuthMutation = () => {
  const { login } = useAuthContext();

  const mutate = useMutation({
    mutationKey: ["auth', 'login"],
    mutationFn: adminActions.users.login,
    onSuccess: (data) => {
      // Save user token on login.
      localStorage.setItem(TOKEN, data.access);

      // Save user auth info in context API.
      login(data);

      // Show authentication message.
      toast.success("Login successful.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />);
    },
  });

  return mutate;
};
