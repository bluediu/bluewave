/* Components */
import { PageTitle } from "../../common";
import { Fade } from "react-awesome-reveal";
import { CardGroup, Loader } from "semantic-ui-react";
import { Breadcrumbs, ProductCard } from "../../components/Products";

/* Hooks */
import { useParams } from "react-router-dom";
import { useDeviceType } from "../../../hooks";

/* Module: Hooks */
import { useCategoryProducts } from "../../../Admin/hooks";

import "./ProductsClient.scss";

export const ProductsClient = () => {
  const { category = "" } = useParams();
  const isTabletOrMobile = useDeviceType();

  const { isLoading, data } = useCategoryProducts({
    enabled: true,
    categoryId: +category,
    scope: "client",
  });

  return (
    <div>
      <Breadcrumbs />
      <PageTitle title="Products" />
      <Fade cascade>
        <CardGroup itemsPerRow={!isTabletOrMobile ? 4 : 1}>
          {isLoading && (
            <Loader
              content="Loading products..."
              active
              inline="centered"
              className="mt-5"
            />
          )}

          {data?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </CardGroup>
      </Fade>
    </div>
  );
};
