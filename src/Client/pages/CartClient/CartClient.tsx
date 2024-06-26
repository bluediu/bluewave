import { PageTitle } from "../../common";
import { ProductListInCart } from "../../components/Cart/ProductListInCart";

export const CartClient = () => {
  return (
    <>
      <PageTitle title="Shopping Cart" />
      <ProductListInCart />
    </>
  );
};
