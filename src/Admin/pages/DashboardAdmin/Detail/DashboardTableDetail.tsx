/* Components */
import { Loader } from "semantic-ui-react";
import { TableSubtitle } from "../../../common/tables";
import { DetailBreadcrumb, DetailCard } from "./subcomponents";

/* Hooks */
import { useParams } from "react-router-dom";
import { useProductsOrder } from "../../../hooks";

export const DashboardTableDetail = () => {
  const { code = "0" } = useParams();
  const { data, isLoading } = useProductsOrder(code);

  return (
    <main>
      <DetailBreadcrumb />

      <TableSubtitle text={`Table #${code}`} />

      {isLoading ? (
        <Loader size="large" content={`Loading...`} active inline="centered" />
      ) : (
        data!.map((item) => <DetailCard item={item} key={item.code} />)
      )}

      {!isLoading && !data?.length && (
        <TableSubtitle text="No orders found" className="text-center" />
      )}
    </main>
  );
};
