/* Hooks */
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks";

/* Components */
import { Detail } from "../../common";

/* Constants */
import { CATEGORIES } from "../../constants/paths";

export const CategoryDetail = () => {
  const { id = "0" } = useParams();
  const { category } = useCategory(+id);

  const fields = [
    { label: "Name", value: "name" },
    { label: "Active", value: "is_active" },
  ];

  return (
    <Detail
      data={category}
      title="Category detail"
      fields={fields}
      renderImage={true}
      goBackUrl={CATEGORIES}
    />
  );
};
