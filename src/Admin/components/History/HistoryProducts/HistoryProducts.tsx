/* Components */
import { Icon } from "semantic-ui-react";

import { HistoryProductCard } from "./HistoryProductCard";

/* Hooks */
import { useOrdersPayment } from "@/Admin/hooks";

interface IProps {
  code: string;
}

export const HistoryProducts = ({ code }: IProps) => {
  const { data, isLoading } = useOrdersPayment(code);

  return (
    <section>
      {isLoading && (
        <div className="d-flex justify-content-center my-4">
          <Icon loading name="spinner" size="big" />
        </div>
      )}

      {data?.map((product) => (
        <HistoryProductCard key={product.product_id} product={product} />
      ))}
    </section>
  );
};
