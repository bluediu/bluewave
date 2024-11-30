/* Libs components */
import { Button } from "semantic-ui-react";

/* Components */
import { ModalBasic, ModalConfirm } from "@/shared";

import { TableSubtitle } from "@/Admin/common";

/* Components */
import {
  // Common
  Breadcrumbs,

  // Form
  OrderForm,
  PaymentForm,

  // Payments
  PaymentDetail,
  ViewBillButton,

  // Orders
  OrderList,
  StatusOverview,
  ActionButtons,
  Inconsistency,
} from "@/Admin/components/Dashboard";

/* Hooks */
import { useParams } from "react-router-dom";

import { useConfirmModal } from "@/hooks";

import { useModal, usePayment, useProductsOrder } from "@/Admin/hooks";

export const DashboardDetail = () => {
  const { code = "0" } = useParams();

  const { payment, isLoading } = usePayment(code);

  const {
    productOrderQuery: products,
    orderStateQuery: orderState,
    isLoadingData,
    canGenerateBill,
    existingProducts,
  } = useProductsOrder({ tableCode: code });

  /* prettier-ignore */
  const { 
    showModal, 
    modalContent, 
    modalTitle,
    openModal,
    closeModal 
  } = useModal();

  /* prettier-ignore */
  const {
    showConfirmModal,
    openConfirmModal,
    closeConfirmModal 
  } = useConfirmModal();

  const onRegister = (): void => {
    openModal(
      `New order for table #${code}`,
      <OrderForm code={code} onClose={closeModal} />,
    );
  };

  const onRegisterPayment = (): void => {
    closeConfirmModal();

    openModal(
      "Register payment method",
      <PaymentForm inTable={code} onClose={closeModal} />,
    );
  };

  const onPaymentDetail = (): void => {
    openModal("Bill detail", <PaymentDetail data={payment!} />);
  };

  return (
    <main>
      <Breadcrumbs />
      {isLoading ? (
        <div className="text-end my-3">
          <Button loading={true}>.......</Button>
          <Button loading={true}>.......</Button>
        </div>
      ) : (
        <>
          {payment ? (
            <ViewBillButton
              onClick={onPaymentDetail}
              disabled={isLoadingData}
            />
          ) : (
            <ActionButtons
              disabled={isLoadingData}
              canGenerateBill={canGenerateBill}
              onRegister={onRegister}
              onGenerateBill={openConfirmModal}
            />
          )}
        </>
      )}

      {existingProducts && <Inconsistency orders={products} tableCode={code} />}

      {/* Core */}
      <TableSubtitle text={`Table #${code}`} />
      <StatusOverview orderState={orderState} />
      <OrderList products={products} tableCode={code} />

      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        children={modalContent ?? <span>No content</span>}
      />
      <ModalConfirm
        show={showConfirmModal}
        warningMsg="Are you sure you want to generate the bill for this table?"
        onConfirm={onRegisterPayment}
        onClose={closeConfirmModal}
      />
    </main>
  );
};
