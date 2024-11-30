/* Components */
import { ItemList } from "@/shared";

import { ProductCard } from "../ProductCard";

/* Module: Interfaces */
import { ICategoryProduct } from "@/Admin/interfaces";

interface IProps {
  isLoading: boolean;
  data?: ICategoryProduct[];
}

export const ProductList = (props: IProps) => {
  const { isLoading, data } = props;

  return (
    <>
      <ItemList isLoading={isLoading} loadingMsg="Loading product...">
        <>
          {data?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </>
      </ItemList>
    </>
  );
};
