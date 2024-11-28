import { useContext } from "react";

/* Context */
import { CartContext } from "@/Client/context";

interface IProps {
  productIdExists: number;
}

export const useProductInCart = ({ productIdExists }: IProps) => {
  /* prettier-ignore */
  const { 
    count, 
    products, 
    addToCart, 
    removeFromCart, 
    removeAllFromCart 
  } = useContext(CartContext);

  const isProductInCart = products.some(
    (cartItem) => cartItem.id === productIdExists,
  );

  return {
    count,
    products,
    isProductInCart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  };
};
