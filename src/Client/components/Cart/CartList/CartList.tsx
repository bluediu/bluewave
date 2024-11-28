/* Components*/
import { Fade } from "react-awesome-reveal";

import { CartCard } from "../CartCard";

/* Interfaces */
import { ICartProduct } from "@/Client/interfaces";

interface IProps {
  products: ICartProduct[];
  toRemove: (productId: number) => void;
  toUpdate: (productId: number, newQty: number) => void;
}

export const CartList = (props: IProps) => {
  const { products, toRemove, toUpdate } = props;

  return (
    <Fade>
      {products.map((product) => (
        <CartCard
          key={product.id}
          product={product}
          toRemove={toRemove}
          toUpdate={toUpdate}
        />
      ))}
    </Fade>
  );
};
