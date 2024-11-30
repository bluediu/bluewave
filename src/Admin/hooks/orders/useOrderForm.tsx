/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Services */
import { adminActions } from "@/Admin/services";

/* Constants */
import { STALE_TIME } from "@/constants";

export const useOrderForm = (code: string) => {
  const mutation = useQuery({
    queryKey: ["orderRegisterForm", code],
    queryFn: () => adminActions.forms.getRegisterOrderForm(code),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return mutation;
};
