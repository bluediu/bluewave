/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ITable } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  table?: ITable;
}

export const useTable = (id: number): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: table,
  } = useQuery({
    queryKey: ["table", id],
    queryFn: () => adminActions.tables.getTable(id),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, table };
};
