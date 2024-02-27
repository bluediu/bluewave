import { useQuery } from "@tanstack/react-query";
import { IUser } from "../../interfaces";
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
    queryFn: () => adminActions.getUser(id),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, user };
};
