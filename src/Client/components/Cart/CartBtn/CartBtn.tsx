/* Components */
import { Button } from "semantic-ui-react";

/* Hooks */
import {
  useProductInCart,
  useProductsInOrder,
  useTableContext,
} from "@/Client/hooks";

/* Interfaces */
import { ICartProduct } from "@/Client/interfaces";

import "./CartBtn.scss";

interface IProps {
  product: ICartProduct;
  fluid?: boolean;
}

export const CartBtn = ({ product, fluid = false }: IProps) => {
  const { isProductInCart, addToCart } = useProductInCart({
    productIdExists: product.id,
  });

  const { table } = useTableContext();

  const products = useProductsInOrder(table!.code);

  const isProductInOrder = products?.includes(product.id);

  return (
    <Button
      circular
      fluid={fluid}
      className="add-to-cart-btn m-0"
      onClick={() => addToCart(product)}
      disabled={isProductInCart || isProductInOrder}
    >
      Add to Cart
    </Button>
  );
};
