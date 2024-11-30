/* Layouts */
import { CardGroupLayout } from "@/Client/layouts";

/* Components */
import { PageTitle } from "@/Client/common";
import { Breadcrumbs, ProductList } from "@/Client/components/Products";

/* Hooks */
import { useProducts } from "@/Admin/hooks";

export const AllProductsClient = () => {
  const { isLoading, data } = useProducts({
    filterBy: "actives",
    scope: "client",
  });

  const products = data?.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    is_active: p.is_active,
    image: p.image,
    category_name: p.category.name,
    max_qty: p.max_qty,
    min_qty: p.min_qty,
  }));

  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Products" />
      <CardGroupLayout>
        <ProductList isLoading={isLoading} data={products} />
      </CardGroupLayout>
    </>
  );
};
