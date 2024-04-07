/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProduct } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  product?: IProduct;
}

export const useProduct = (id: number): IOutputProps => {
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => adminActions.products.getProduct(id),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, product };
};
