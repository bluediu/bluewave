/* Layouts */
import { CardGroupLayout } from "../../layouts";

/* Components */
import { PageTitle } from "../../common";
import { Breadcrumbs, ProductList } from "../../components/Products";

/* Hooks */
import { useParams } from "react-router-dom";

/* Module: Hooks */
import { useCategoryProducts } from "../../../Admin/hooks";

import "./ProductsClient.scss";

export const ProductsClient = () => {
  const { category = "" } = useParams();

  const { isLoading, data } = useCategoryProducts({
    enabled: true,
    categoryId: +category,
    scope: "client",
  });

  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Products" />
      <CardGroupLayout>
        <ProductList isLoading={isLoading} data={data} />
      </CardGroupLayout>
    </>
  );
};
