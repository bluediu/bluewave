/* Hooks */
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks";

/* Components */
import { Detail } from "../../common";

/* Constants */
import { CATEGORY_DETAIL, PRODUCTS } from "../../constants";

export const ProductDetail = () => {
  const { id = "0" } = useParams();
  const { product } = useProduct({ id: +id });

  const fields = [
    { label: "Name", value: "name" },
    { label: "Description", value: "description" },
    { label: "Price", value: "price" },
    {
      label: "Category",
      value: "category",
      relatedTo: "name",
      linkTo: CATEGORY_DETAIL,
    },
    { label: "Active", value: "is_active" },
  ];

  return (
    <Detail
      data={product}
      title="Product detail"
      fields={fields}
      related={["category"]}
      renderImage={true}
      goBackUrl={PRODUCTS}
    />
  );
};
