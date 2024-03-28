/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { ICategory } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  category?: ICategory;
}

export const useCategory = (id: number): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: category,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: () => adminActions.categories.getCategory(id),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, category };
};
