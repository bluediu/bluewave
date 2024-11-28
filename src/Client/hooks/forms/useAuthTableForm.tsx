/* Hooks */
import { DefaultError } from "@tanstack/query-core";

/* Interfaces */
import { IForm } from "@/Admin/interfaces";

/* Services */
import { clientActions } from "@/Client/services";

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

export const useAuthTableForm = (): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: form,
  } = useQuery({
    queryKey: ["authTableFormSchema"],
    queryFn: clientActions.forms.getAuthTableForm,
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return { isLoading, isError, error, form };
};
