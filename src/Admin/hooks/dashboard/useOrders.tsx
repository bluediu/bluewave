/*  Hooks */
import { UseQueryResult, useQuery } from "@tanstack/react-query";

/* Interfaces */
import { IProduct } from "../../interfaces";

/* Services */
import { adminActions } from "../../services";

interface IProps {
  tableId?: number;
  status?: number;
  // table_id?: number;
}

export const useOrders = (props: IProps): UseQueryResult<IProduct[], Error> => {
  // TODO: WIP hooks, next issue
  const { tableId, status } = props;

  const query = useQuery({
    queryKey: ["products", { tableId }],
    queryFn: () => adminActions.transactions.listOrders(tableId),
    refetchOnWindowFocus: false,
  });

  return query;
};
