import { useContext } from "react";

/* Context */
import { AuthTableContext } from "../../../context";

/* Components */
import { PaymentDone } from "../PaymentDone";
import { PaymentChoice, RequestBillButton } from "../Payment";
import { ModalBasic, ModalConfirm } from "../../../../shared";

import {
  StatusOverview,
  OrderList as AdminOrderList,
} from "../../../../Admin/components/Dashboard";

/* Module: Hooks */
import {
  useModal,
  usePayment,
  usePaymentForm,
  useProductsOrder,
} from "../../../../Admin/hooks";

/* Hooks */
import { useConfirmModal } from "../../../../hooks";

import "./OrderList.scss";

export const OrderList = () => {
  const { code } = useContext(AuthTableContext);

  /* == APIs == */
  const { payment } = usePayment(code);
  const {
    productOrderQuery: products,
    orderStateQuery: orderState,
    isLoadingData,
    canGenerateBill,
  } = useProductsOrder({ tableCode: code, scope: "client" });

  // Get Form
  const form = usePaymentForm();

  /* == Hooks == */
  /* prettier-ignore */
  const {
    showConfirmModal,
    openConfirmModal,
    closeConfirmModal 
  } = useConfirmModal();

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal 
  } = useModal();

  const onPaymentChoice = (): void => {
    closeConfirmModal();

    const { choices } = form.data!.fields[0];
    openModal(
      "Choose your payment method",
      <PaymentChoice choices={choices} code={code} onClose={closeModal} />,
    );
  };

  return (
    <>
      {payment ? (
        <PaymentDone />
      ) : (
        <RequestBillButton
          isActive={isLoadingData || !canGenerateBill}
          onClick={openConfirmModal}
        />
      )}

      <StatusOverview orderState={orderState} />
      <AdminOrderList
        products={products}
        tableCode={code}
        renderForAdmin={false}
      />

      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        children={modalContent ?? <span>No content</span>}
      />
      <ModalConfirm
        show={showConfirmModal}
        warningMsg="Are you sure you want to request the bill? This action can't be undo."
        onConfirm={onPaymentChoice}
        onClose={closeConfirmModal}
      />
    </>
  );
};
