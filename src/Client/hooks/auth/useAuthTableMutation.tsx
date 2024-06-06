import { useContext } from "react";

/* Components  */
import { Errors } from "../../../shared";

/* Hooks  */
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

/* Context */
import { AuthTableContext } from "../../context";

/* Services */
import { clientActions } from "../../services";

/* Constants */
import { TOKEN } from "../../constants";

export const useAuthTableMutation = () => {
  const { login } = useContext(AuthTableContext);

  const mutate = useMutation({
    mutationKey: ["authTableLogin"],
    mutationFn: clientActions.auth.login,
    onSuccess: (data) => {
      // Save table token on login.
      localStorage.setItem(TOKEN, data.access);
      // Save table auth info in context API.
      login(data.code);
      // Show authentication message.
      toast.success("Login successful.");
    },
    onError: (error) => {
      toast.error(<Errors error={error} />);
    },
  });

  return mutate;
};
