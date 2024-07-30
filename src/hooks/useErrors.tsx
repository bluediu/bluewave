import { useEffect } from "react";

/* Libs */
import { toast } from "react-toastify";
import { UseQueryResult } from "@tanstack/react-query";

/* Components */
import { Errors } from "../shared";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: UseQueryResult<Record<string, any>[], Error>;
}

export const useErrors = ({ query }: IProps) => {
  useEffect(() => {
    if (query.isError) {
      toast.error(<Errors error={query.error} />, { autoClose: false });
    }
  }, [query.isError, query.error]);
};
