/* Components */
import { PageTitle } from "../../../common";
import { ItemList } from "../../../../shared";
import { DetailBreadcrumbs, ProductDetail } from "../../../components/Products";

/* Hooks */
import { useProduct } from "../../../../Admin/hooks";
import { useParams } from "react-router-dom";

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
