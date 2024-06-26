/* Components */
import { Button } from "semantic-ui-react";

/* Hooks */
import { useProductInCart } from "../../../hooks";

/* Interfaces */
import { ICartProduct } from "../../../interfaces";

import "./CartBtn.scss";

interface IProps {
  product: ICartProduct;
  fluid?: boolean;
}

export const CartBtn = ({ product, fluid = false }: IProps) => {
  const { isProductInCart, addToCart } = useProductInCart({
    productIdExists: product.id,
  });

  return (
    <Button
      circular
      fluid={fluid}
      className="add-to-cart-btn m-0"
      onClick={() => addToCart(product)}
      disabled={isProductInCart}
    >
      Add to Cart
    </Button>
  );
};
