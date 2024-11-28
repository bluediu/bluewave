/* Layouts */
import { CardGroupLayout } from "@/Client/layouts";

/* Components */
import { PageTitle } from "@/Client/common";
import { Breadcrumbs, ProductList } from "@/Client/components/Products";

/* Hooks */
import { useParams } from "react-router-dom";

/* Module: Hooks */
import { useCategoryProducts } from "@/Admin/hooks";

export const ProductsClient = () => {
  const { category = "" } = useParams();

  const { isLoading, data } = useCategoryProducts({
    enabled: true,
    categoryId: +category,
    filterBy: "actives",
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
