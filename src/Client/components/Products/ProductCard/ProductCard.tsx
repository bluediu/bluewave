/* Layouts */
import { CardLayout } from "@/Client/layouts";

/* Components */
import { CartBtn } from "../../Cart";
import { Card, Label } from "semantic-ui-react";

/* Hooks */
import { useNavigate } from "react-router-dom";

/* Module: Interface */
import { ICategoryProduct } from "@/Admin/interfaces";

/* Utils */
import { fn } from "@/utils";

/* Constants */
import { PRODUCT_DETAIL } from "@/Client/constants";

export const ProductCard = ({ product }: { product: ICategoryProduct }) => {
  const navigate = useNavigate();

  const truncatedDescription =
    product.description.length > 70
      ? product.description.slice(0, 70) + "..."
      : product.description;

  const truncatedName =
    product.name.length > 15 ? product.name.slice(0, 15) + "..." : product.name;

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
        <Card.Header
          className="card-content__text d-flex justify-content-between align-items-center mb-2"
          title={product.name}
        >
          {truncatedName}
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
          <CartBtn product={{ ...product, productQty: 1 }} />
        </section>
      </Card.Content>
    </CardLayout>
  );
};
