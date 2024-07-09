/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../services";

export const useOrderForm = (code: string) => {
  const mutation = useQuery({
    queryKey: ["orderRegisterForm", code],
    queryFn: () => adminActions.forms.getRegisterOrderForm(code),
    refetchOnWindowFocus: false,
    staleTime: 86400000, // One day
  });

  return mutation;
};
