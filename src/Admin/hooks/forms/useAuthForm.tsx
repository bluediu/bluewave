/* Hooks */
import { DefaultError } from "@tanstack/query-core";

/* Interfaces */
import { IForm } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

/* Types */
import { useQuery } from "@tanstack/react-query";

/* Constants */
import { STALE_TIME } from "@/constants";

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: DefaultError | null;
  form?: IForm;
}

export const useAuthForm = (): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: form,
  } = useQuery({
    queryKey: ["authFormSchema"],
    queryFn: adminActions.forms.getAuthForm,
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return { isLoading, isError, error, form };
};
