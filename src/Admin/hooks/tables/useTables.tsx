/*  Hooks */
import { useErrors } from "@/hooks";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ITable } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

/* Types */
import { TFilter } from "@/Admin/types";

export const useTables = (
  filterBy: TFilter,
): UseQueryResult<ITable[], Error> => {
  const query = useQuery({
    queryKey: ["tables", { filterBy }],
    queryFn: () => adminActions.tables.listTables(filterBy),
    refetchOnWindowFocus: false,
  });

  useErrors({ query });

  return query;
};
