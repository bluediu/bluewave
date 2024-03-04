/* Hooks */
import { DefaultError } from "@tanstack/query-core";

/* Interfaces */
import { IForm } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { useQuery } from "@tanstack/react-query";

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
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, isError, error, form };
};
