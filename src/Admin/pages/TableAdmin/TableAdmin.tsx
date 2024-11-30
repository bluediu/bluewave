import { useState } from "react";

/* Component */
import { ModalBasic } from "@/shared";

import { CreateBtn, TableTitle } from "@/Admin/common";

import {
  TableTables,
  TableCreateForm,
  TableUpdateForm,
} from "@/Admin/components/Tables";

/* Hooks */
import { useDynamicPageTitle } from "@/hooks";

import { useTables, useModal } from "@/Admin/hooks";

/* Services */
import { adminActions } from "@/Admin/services";

/* Interfaces */
import { ITable } from "@/Admin/interfaces";

/* Types */
import { TFilter } from "@/Admin/types";

export const TableAdmin = () => {
  const scope = "Tables";
  const cache = "Table";

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
  const query = useTables(filterBy);

  const onFilterChange = (value: TFilter) => setFilterBy(value);

  const onCreate = (): void => {
    openModal(
      "Create a new table",
      <TableCreateForm
        cache={cache}
        onClose={closeModal}
        getCreateForm={adminActions.forms.getCreateTableForm}
      />,
    );
  };

  const onUpdate = (table: ITable): void => {
    openModal(
      `Update table #${table.id}`,
      <TableUpdateForm
        cache={cache}
        id={table.id}
        onClose={closeModal}
        getUpdateForm={adminActions.forms.getUpdateTableForm}
      />,
    );
  };

  return (
    <div>
      <TableTitle text={scope} />
      <CreateBtn onClick={onCreate} isLoading={query.isLoading} />
      <TableTables
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
