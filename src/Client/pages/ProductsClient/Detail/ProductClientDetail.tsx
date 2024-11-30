/* Components */
import { ItemList } from "@/shared";

import { PageTitle } from "@/Client/common";
import { DetailBreadcrumbs, ProductDetail } from "@/Client/components/Products";

/* Hooks */
import { useParams } from "react-router-dom";

import { useProduct } from "@/Admin/hooks";

export const ProductClientDetail = () => {
  const { id = "0" } = useParams();
  const { isLoading, product } = useProduct({ id: +id, scope: "client" });

  return (
    <div>
      <DetailBreadcrumbs />
      <PageTitle title="Product detail" />
      <ItemList isLoading={isLoading} loadingMsg="Loading product...">
        <>{product && <ProductDetail product={product} />}</>
      </ItemList>
    </div>
  );
};
