/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProduct } from "../../interfaces";

/* Types */
import { TScope } from "../../../types";

/* Services */
import { adminActions } from "../../services";

interface InputProps {
  id: number;
  scope?: TScope;
}

interface IOutputProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  product?: IProduct;
}

export const useProduct = (props: InputProps): IOutputProps => {
  const { id, scope = "admin" } = props;

  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => adminActions.products.getProduct(id, scope),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, product };
};
