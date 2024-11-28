/* Components  */
import { Errors } from "@/shared";

/* Hooks  */
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useTableContext } from "../useTableContext";

/* Services */
import { clientActions } from "@/Client/services";

/* Constants */
import { TOKEN } from "@/Client/constants";

export const useAuthTableMutation = () => {
  const { login } = useTableContext();

  const mutate = useMutation({
    mutationKey: ["authTableLogin"],
    mutationFn: clientActions.auth.login,
    onSuccess: (data) => {
      // Save table token on login.
      localStorage.setItem(TOKEN, data.access);

      // Save table auth info in context API.
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
