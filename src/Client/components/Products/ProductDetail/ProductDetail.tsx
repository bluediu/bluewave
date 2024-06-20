/* Components */
import { Button, Card, Image, Label, Popup } from "semantic-ui-react";

/* Module: Interfaces */
import { IProduct } from "../../../../Admin/interfaces";

/* Utils */
import { convertCentToDolar } from "../../../../utils";

import "./ProductDetail.scss";

export const ProductDetail = ({ product }: { product: IProduct }) => {
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
          <Card.Meta className="mt-4">
            <span>Quantity: </span>
            <Popup
              key={product.name}
              content={`Max. allowed ${product.max_qty}`}
              trigger={
                <Button
                  circular
                  size="mini"
                  icon="plus"
                  basic
                  className="mr-1"
                  // onClick={() => handleQty(1)}
                  // disabled={isPending || quantity === item.max_qty}
                />
              }
            />
            <span className="fw-bold mx-1">2</span>
            <Button circular size="mini" icon="minus" basic className="ml-1" />
          </Card.Meta>
        </section>
        <Button
          circular
          fluid
          className="add-to-cart-btn mt-4"
          onClick={() => {
            console.log("CLICK ME");
          }}
        >
          Add to cart
        </Button>
      </Card.Content>
    </Card>
  );
};
