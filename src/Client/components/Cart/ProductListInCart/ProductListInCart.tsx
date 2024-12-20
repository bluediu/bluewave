import { useContext } from "react";

/* Context */
import { CartContext } from "@/Client/context";

/* Components */
import { CartList } from "../CartList";
import { Button, Divider } from "semantic-ui-react";

/* Hooks */
import { useDeviceType } from "@/hooks";

import { useOrdersMutation, useTableContext } from "@/Client/hooks";

/* Utils */
import { convertCentToDolar } from "@/utils";

import "./ProductListInCart.scss";

export const ProductListInCart = () => {
  const isTabletOrMobile = useDeviceType();

  const { table } = useTableContext();

  const mutate = useOrdersMutation();

  /* prettier-ignore */
  const { 
    products, 
    count, 
    removeFromCart,
    updateQtyFromCart,
    removeAllFromCart 
  } = useContext(CartContext);

  const total = products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.productQty,
    0,
  );

  const placeOrders = () => {
    const orders = products.map((p) => ({
      product: p.id,
      quantity: p.productQty,
    }));

    mutate.mutate({ table: table!.code, products: orders });
  };

  return (
    <>
      <section className="text-end">
        <span className="cart-remove-btn" onClick={removeAllFromCart}>
          Remove all
        </span>
      </section>
      <CartList
        products={products}
        toRemove={removeFromCart}
        toUpdate={updateQtyFromCart}
      />
      <Divider section />
      <div className="mb-5">
        <article
          className={`d-flex justify-content-between ${isTabletOrMobile && "flex-column-reverse"}`}
        >
          <section className="d-flex align-items-center my-2">
            <Button
              circular
              fluid
              size={!isTabletOrMobile ? "large" : "medium"}
              className="add-to-cart-btn m-0"
              onClick={placeOrders}
              disabled={!products.length}
              loading={mutate.isPending}
            >
              Place orders
            </Button>
          </section>

          <section className="d-flex justify-content-between">
            <div className="mr-5">
              <h2 className="m-0">Sub-Total</h2>
              <span className="text-secondary">{count} products</span>
            </div>
            <div>
              <h1 className="title-color-gradient">
                ${convertCentToDolar(total)} USD
              </h1>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};
