import { DefaultError } from "@tanstack/query-core";
import { useQuery } from "@tanstack/react-query";

import { IAuthForm } from "../../interfaces";
import { adminActions } from "../../services";

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: DefaultError | null;
  form?: IAuthForm;
}

export const useAuthForm = (): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: form,
  } = useQuery({
    queryKey: ["authFormSchema"],
    queryFn: adminActions.getAuthForm,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, isError, error, form };
};
