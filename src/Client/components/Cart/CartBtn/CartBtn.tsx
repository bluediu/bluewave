import { useContext } from "react";

/* Context */
import { AuthTableContext } from "../../../context";

/* Components */
import { Button } from "semantic-ui-react";

/* Admin: Hooks */
import { useProductsInOrder } from "../../../hooks";

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

  const { code } = useContext(AuthTableContext);

  const products = useProductsInOrder(code);

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
