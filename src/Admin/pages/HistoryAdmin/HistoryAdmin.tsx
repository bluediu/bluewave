import { useState } from "react";

/* Components */
import { ModalBasic } from "@/shared";

import { SearchBtn, TableTitle } from "@/Admin/common";

import {
  HistoryTable,
  HistoryGetForm,
  HistoryProducts,
} from "@/Admin/components/History";

/* Hooks */
import { useModal, usePayments } from "@/Admin/hooks";

/* Interfaces */
import { IPaymentSearch } from "@/Admin/interfaces";

/* Services */
import { adminActions } from "@/Admin/services";

export const HistoryAdmin = () => {
  const scope = "History";

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal 
  } = useModal();

  const [enabled, setEnabled] = useState(false);

  const [params, setParams] = useState<IPaymentSearch>({
    code: "",
    payment_type: "",
    since: "",
    until: "",
  });

  const query = usePayments(enabled, params);

  const handleParams = (data: IPaymentSearch) => {
    setParams(data);
    setEnabled(true);
  };

  const onSearch = (): void => {
    openModal(
      "Search",
      <HistoryGetForm
        cache={scope}
        onClose={closeModal}
        getForm={adminActions.forms.getSearchHistoryForm}
        getData={handleParams}
      />,
    );
  };

  const onDetail = (code: string): void => {
    openModal("Products", <HistoryProducts code={code} />);
  };

  return (
    <div>
      <TableTitle text={scope} />
      <SearchBtn isLoading={false} onClick={onSearch} />
      <HistoryTable query={query} scope={scope} onDetail={onDetail} />
      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        size="fullscreen"
        children={modalContent ?? <span>No content</span>}
      />
    </div>
  );
};
