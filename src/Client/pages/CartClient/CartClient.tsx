/* Components */
import { PageTitle } from "@/Client/common";

import { ProductListInCart } from "@/Client/components/Cart";

export const CartClient = () => {
  return (
    <>
      <PageTitle title="Shopping Cart" />
      <ProductListInCart />
    </>
  );
};
