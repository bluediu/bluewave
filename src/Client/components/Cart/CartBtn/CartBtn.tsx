/* Components */
import { Button } from "semantic-ui-react";

/* Hooks */
import { useProductInCart } from "../../../hooks";

/* Interfaces */
import { ICartProduct } from "../../../interfaces";

import "./CartBtn.scss";
import { useProductsOrder } from "../../../../Admin/hooks";
import { useContext } from "react";
import { AuthTableContext } from "../../../context";

interface IProps {
  product: ICartProduct;
  fluid?: boolean;
}

export const CartBtn = ({ product, fluid = false }: IProps) => {
  const { isProductInCart, addToCart } = useProductInCart({
    productIdExists: product.id,
  });

  const { code } = useContext(AuthTableContext);

  // TODO: Use another API, next issue.
  const { productOrderQuery: products } = useProductsOrder({
    tableCode: code,
    scope: "client",
  });

  const isProductInOrder =
    products.data?.some((p) => Number(p.product_id) === Number(product.id)) ??
    false;

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
