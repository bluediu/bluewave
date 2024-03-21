import { useState } from "react";

/* Component */
import { ModalBasic } from "../../../shared";
import { CreateBtn, TableTitle } from "../../common";
import {
  TableCategories,
  CategoryCreateForm,
  CategoryUpdateForm,
} from "../../components/Categories";

/* Hooks */
import { useDynamicPageTitle } from "../../../hooks";
import { useCategories, useModal } from "../../hooks";

/* Services */
import { adminActions } from "../../services";

/* Interfaces */
import { ICategory } from "../../interfaces";

/* Types */
import { TFilter } from "../../types";

export const CategoryAdmin = () => {
  const scope = "Categories";
  const cache = "Category";

  useDynamicPageTitle(scope);

  const { showModal, modalContent, modalTitle, openModal, closeModal } =
    useModal();
  const [filterBy, setFilterBy] = useState<TFilter>("actives");
  const query = useCategories(filterBy);

  const onFilterChange = (value: TFilter) => setFilterBy(value);

  const onCategoryCreate = (): void => {
    openModal(
      "Create a new category",
      <CategoryCreateForm
        cache={cache}
        onClose={closeModal}
        getCreateForm={adminActions.forms.getCreateCategoryForm}
      />,
    );
  };

  const onCategoryUpdate = (category: ICategory): void => {
    openModal(
      `Update category #${category.id}`,
      <CategoryUpdateForm
        cache={cache}
        id={category.id}
        onClose={closeModal}
        getUpdateForm={adminActions.forms.getUpdateCategoryForm}
      />,
    );
  };

  return (
    <div>
      <TableTitle text={scope} />
      <CreateBtn onClick={onCategoryCreate} isLoading={query.isLoading} />
      <TableCategories
        scope={scope}
        query={query}
        onFilterChange={onFilterChange}
        onCategoryUpdate={onCategoryUpdate}
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
