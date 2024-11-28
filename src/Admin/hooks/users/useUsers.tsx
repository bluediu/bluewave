/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IUser } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

/* Types */
import { TFilter } from "@/Admin/types";

export const useUsers = (filterBy: TFilter): UseQueryResult<IUser[], Error> => {
  const query = useQuery({
    queryKey: ["users", { filterBy }],
    queryFn: () => adminActions.users.listUsers(filterBy),
    refetchOnWindowFocus: false,
  });

  return query;
};
