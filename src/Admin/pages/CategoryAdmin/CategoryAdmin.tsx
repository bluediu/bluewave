import { useState } from "react";

/* Component */
import { ModalBasic } from "@/shared";

import { CreateBtn, TableTitle } from "@/Admin/common";

import {
  TableCategories,
  CategoryCreateForm,
  CategoryUpdateForm,
} from "@/Admin/components/Categories";

/* Hooks */
import { useDynamicPageTitle } from "@/hooks";

import { useCategories, useModal } from "@/Admin/hooks";

/* Services */
import { adminActions } from "@/Admin/services";

/* Interfaces */
import { ICategory } from "@/Admin/interfaces";

/* Types */
import { TFilter } from "@/Admin/types";

export const CategoryAdmin = () => {
  const scope = "Categories";
  const cache = "Category";

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
  const query = useCategories(filterBy);

  const onFilterChange = (value: TFilter) => setFilterBy(value);

  const onCreate = (): void => {
    openModal(
      "Create a new category",
      <CategoryCreateForm
        cache={cache}
        onClose={closeModal}
        getCreateForm={adminActions.forms.getCreateCategoryForm}
      />,
    );
  };

  const onUpdate = (category: ICategory): void => {
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
      <CreateBtn onClick={onCreate} isLoading={query.isLoading} />
      <TableCategories
        scope={scope}
        query={query}
        onFilterChange={onFilterChange}
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
