/* Components */
import { PageTitle } from "@/Client/common";
import { OrderList } from "@/Client/components/Orders";

export const OrdersClient = () => {
  return (
    <>
      <PageTitle title="Orders" />
      <OrderList />
    </>
  );
};
