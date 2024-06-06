/* Hooks */
import { DefaultError } from "@tanstack/query-core";

/* Module: Interfaces */
import { IForm } from "../../../Admin/interfaces";

/* Services */
import { clientActions } from "../../services";

/* Types */
import { useQuery } from "@tanstack/react-query";

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
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, isError, error, form };
};
