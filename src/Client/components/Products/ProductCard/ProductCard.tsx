/* Layouts */
import { CardLayout } from "../../../layouts";

/* Components */
import { Button, Card, Label } from "semantic-ui-react";

/* Hooks */
import { useNavigate } from "react-router-dom";

/* Module: Interface */
import { ICategoryProduct } from "../../../../Admin/interfaces";

/* Utils */
import { fn } from "../../../../utils";

/* Constants */
import { PRODUCT_DETAIL } from "../../../constants/paths";

import "./ProductCard.scss";

export const ProductCard = ({ product }: { product: ICategoryProduct }) => {
  const navigate = useNavigate();

  const truncatedDescription =
    product.description.length > 70
      ? product.description.slice(0, 70) + "..."
      : product.description;

  const goToProductDetail = () => {
    const url = fn.generateUrl(PRODUCT_DETAIL, { id: product.id });
    navigate(url);
  };

  return (
    <CardLayout
      image={product.image}
      key={product.id}
      onClick={goToProductDetail}
    >
      <Card.Content className="card-content">
        <Card.Header className="card-content__text d-flex justify-content-between align-items-center mb-2">
          {product.name}
          <Label horizontal size="medium" color="blue" title="Category">
            {product.category_name}
          </Label>
        </Card.Header>
        <p className="text-secondary mb-3">{truncatedDescription}</p>

        <section className="d-flex justify-content-between align-items-center">
          <h2 className="m-0">
            <span className="title-color-gradient">
              $ {fn.convertCentToDolar(product.price)}
            </span>
          </h2>

          <Button
            circular
            className="add-to-cart-btn m-0"
            onClick={() => {
              console.log("CLICK ME");
            }}
          >
            Add to cart
          </Button>
        </section>
      </Card.Content>
    </CardLayout>
  );
};
