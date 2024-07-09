import { UseQueryResult } from "@tanstack/react-query";

/* Components */
import { Button, Card } from "semantic-ui-react";

/* Hooks */
import { useNavigate } from "react-router-dom";
import { useCloseOrders } from "../../../../hooks";

/* Interfaces */
import { IProductOrder } from "../../../../interfaces";

/* Constants */
import { ADMIN } from "../../../../constants";

interface IProps {
  orders: UseQueryResult<IProductOrder[], Error>;
  tableCode: string;
}

export const Inconsistency = ({ orders, tableCode }: IProps) => {
  const navigate = useNavigate();

  const { mutate, isSuccess, isError, isPending } = useCloseOrders(tableCode);

  const allOrdersCanceled = (orders: IProductOrder[]): boolean => {
    return orders.every((order) => order.status_label === "Canceled");
  };

  if (!allOrdersCanceled(orders.data!)) return;

  if (isSuccess || isError) navigate(ADMIN);

  return (
    <Card fluid color="red">
      <Card.Content header="Inconsistency" />
      <Card.Content
        description={
          "All orders for this table are CANCELED. Consider closing all " +
          "orders for the table without a previous payment or " +
          "generating a new order to continue " +
          "with the table management ."
        }
      />
      <Card.Content extra>
        <Button
          color="red"
          content="Close all orders and clean table"
          loading={isPending}
          onClick={() => mutate()}
          icon="trash alternate"
        />
      </Card.Content>
    </Card>
  );
};
