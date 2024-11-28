/* Components */
import { Card, Image, Label } from "semantic-ui-react";

import { CartBtn } from "../../Cart";

import { QuantitySelector } from "@/shared";

/* Hooks */
import { useQtySelector } from "@/hooks";

/* Interfaces */
import { IProduct } from "@/Admin/interfaces";

/* Utils */
import { convertCentToDolar } from "@/utils";

import "./ProductDetail.scss";

export const ProductDetail = ({ product }: { product: IProduct }) => {
  const { quantity, handleQty } = useQtySelector({
    minQty: product.min_qty,
    maxQty: product.max_qty,
  });

  const productInCart = {
    ...product,
    category_name: product.category.name,
    productQty: quantity,
  };

  return (
    <Card centered className="product-detail__card">
      <Image
        rounded
        wrapped
        className="product-detail__image mb-5"
        src={`${import.meta.env.VITE_API_URL}${product.image}`}
        ui={false}
      />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>
          <Label basic size="medium" title="Category">
            Category: {product.category.name}
          </Label>
        </Card.Meta>

        <Card.Description className="my-3">
          {product.description}
        </Card.Description>

        <section className="d-flex justify-content-between align-items-center">
          <h1 className="m-0">
            <span className="title-color-gradient">
              $ {convertCentToDolar(product.price)}
            </span>
          </h1>
          <QuantitySelector
            targetId={product.id}
            maxQty={product.max_qty}
            minQty={product.min_qty}
            handleQty={handleQty}
            quantity={quantity}
            disabled={false}
          />
        </section>
        <section className="mt-4">
          <CartBtn fluid={true} product={productInCart} />
        </section>
      </Card.Content>
    </Card>
  );
};
