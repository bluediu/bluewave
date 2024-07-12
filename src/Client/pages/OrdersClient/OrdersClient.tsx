import { PageTitle } from "../../common";
import { OrderList } from "../../components/Orders";

export const OrdersClient = () => {
  return (
    <>
      <PageTitle title="Orders" />
      <OrderList />
    </>
  );
};
