/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IUser } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

/* Types */
import { TFilter } from "../../types";

export const useUsers = (filterBy: TFilter): UseQueryResult<IUser[], Error> => {
  const query = useQuery({
    queryKey: ["users", { filterBy }],
    queryFn: () => adminActions.users.listUsers(filterBy),
    refetchOnWindowFocus: false,
  });

  return query;
};
