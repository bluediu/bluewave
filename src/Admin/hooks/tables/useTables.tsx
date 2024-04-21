/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ITable } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { TFilter } from "../../types";

export const useTables = (
  filterBy: TFilter,
): UseQueryResult<ITable[], Error> => {
  const query = useQuery({
    queryKey: ["tables", { filterBy }],
    queryFn: () => adminActions.tables.listTables(filterBy),
    refetchOnWindowFocus: false,
  });

  return query;
};
