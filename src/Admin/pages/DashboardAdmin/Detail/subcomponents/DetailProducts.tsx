/* Components */
import { Loader } from "semantic-ui-react";
import { DetailCard } from "./DetailCard";
import { TableSubtitle } from "../../../../common";

/* Interfaces */
import { IProductOrder } from "../../../../interfaces";

/* Types */
import { UseQueryResult } from "@tanstack/react-query";

interface IProps {
  products: UseQueryResult<IProductOrder[], Error>;
  tableCode: string;
}

export const DetailProducts = ({ products, tableCode }: IProps) => {
  return (
    <>
      {products.isLoading ? (
        <Loader size="large" content={`Loading...`} active inline="centered" />
      ) : (
        products.data!.map((item) => (
          <DetailCard item={item} key={item.code} tableCode={tableCode} />
        ))
      )}

      {!products.isLoading && !products.data?.length && (
        <TableSubtitle text="No orders found" className="text-center" />
      )}
    </>
  );
};
