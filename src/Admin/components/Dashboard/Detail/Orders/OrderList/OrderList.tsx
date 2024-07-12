/* Components */
import { OrderCard } from "../OrderCard";
import { Fade } from "react-awesome-reveal";
import { ItemList } from "../../../../../../shared";
import { TableSubtitle } from "../../../../../common";

/* Hooks */
import { UseQueryResult } from "@tanstack/react-query";

/* Interfaces */
import { IProductOrder } from "../../../../../interfaces";

interface IProps {
  products: UseQueryResult<IProductOrder[], Error>;
  tableCode: string;
  renderForAdmin?: boolean;
}

export const OrderList = (props: IProps) => {
  const { products, tableCode, renderForAdmin = true } = props;

  const noData = !products.isLoading && !products.data?.length;

  return (
    <Fade>
      <ItemList isLoading={products.isLoading} loadingMsg="Loading product...">
        <>
          {products.data?.map((item) => (
            <OrderCard
              item={item}
              key={item.code}
              tableCode={tableCode}
              renderForAdmin={renderForAdmin}
            />
          ))}

          {noData && (
            <TableSubtitle text="No orders found" className="text-center" />
          )}
        </>
      </ItemList>
    </Fade>
  );
};
