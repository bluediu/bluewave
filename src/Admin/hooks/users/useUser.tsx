/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IUser } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  user?: IUser;
}

export const useUser = (id: number): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => adminActions.users.getUser(id),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, user };
};
