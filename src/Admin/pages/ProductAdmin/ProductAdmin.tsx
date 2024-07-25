import { useState } from "react";

/* Component */
import { ModalBasic } from "../../../shared";
import { CreateBtn, TableTitle } from "../../common";
import {
  TableProducts,
  ProductCreateForm,
  ProductUpdateForm,
} from "../../components/Products";

/* Hooks */
import { useDynamicPageTitle } from "../../../hooks";
import { useModal, useProducts } from "../../hooks";

/* Services */
import { adminActions } from "../../services";

/* Interfaces */
import { IProduct } from "../../interfaces";

/* Types */
import { TFilter } from "../../types";

export const ProductAdmin = () => {
  const scope = "Products";
  const cache = "Product";

  useDynamicPageTitle(scope);

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal 
  } = useModal();

  const [filterBy, setFilterBy] = useState<TFilter>("actives");
  const [category, setCategory] = useState<number>(0);

  const query = useProducts({ filterBy, category });

  const onFilterChange = (value: TFilter) => setFilterBy(value);
  const onCategoryChange = (value: number) => setCategory(value);

  const onCreate = (): void => {
    openModal(
      "Create a new product",
      <ProductCreateForm
        cache={cache}
        onClose={closeModal}
        getCreateForm={adminActions.forms.getCreateProductForm}
      />,
    );
  };

  const onUpdate = (product: IProduct): void => {
    openModal(
      `Update category #${product.id}`,
      <ProductUpdateForm
        cache={cache}
        id={product.id}
        onClose={closeModal}
        getUpdateForm={adminActions.forms.getUpdateProductForm}
      />,
    );
  };

  return (
    <div>
      <TableTitle text={scope} />
      <CreateBtn onClick={onCreate} isLoading={query.isLoading} />
      <TableProducts
        scope={scope}
        query={query}
        onFilterChange={onFilterChange}
        onCategoryChange={onCategoryChange}
        onUpdate={onUpdate}
      />
      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        children={modalContent ?? <span>No content</span>}
      />
    </div>
  );
};
