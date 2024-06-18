import { useState } from "react";

/* Hooks */
import { useParams } from "react-router-dom";
import { useCategory, useCategoryProducts } from "../../hooks";

/* Components */
import { Button, Card } from "semantic-ui-react";
import { Detail, TableSubtitle } from "../../common";
import { SubTableProducts } from "../../components/Categories";

/* Constants */
import { CATEGORIES } from "../../constants";

export const CategoryDetail = () => {
  const { id = "0" } = useParams();
  const { category } = useCategory(+id);

  const [enabled, setEnabled] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const products = useCategoryProducts({
    enabled: enabled,
    categoryId: +id,
  });

  const fields = [
    { label: "Name", value: "name" },
    { label: "Active", value: "is_active" },
  ];

  const onShowProducts = () => {
    setEnabled(true);
    setShowContent(true);
    setHasFetched(true);
  };

  return (
    <>
      <Detail
        data={category}
        title="Category detail"
        fields={fields}
        renderImage={true}
        goBackUrl={CATEGORIES}
      />

      <Card fluid style={{ marginTop: "3rem" }}>
        <Card.Content>
          <section className="d-flex justify-content-between align-items-center">
            <TableSubtitle text="Products" className="mb-0" />
            <Button color="blue" onClick={onShowProducts} disabled={hasFetched}>
              Show
            </Button>
          </section>
        </Card.Content>

        {showContent && (
          <Card.Content>
            <SubTableProducts query={products} scope="products" />
          </Card.Content>
        )}
      </Card>
    </>
  );
};
