/* Libs components */
import { Button } from "semantic-ui-react";

/* Components */
import { ModalBasic } from "../../../../shared";
import { ModalConfirm } from "../../../../shared";
import { TableSubtitle } from "../../../common/tables";
import { OrderRegisterForm } from "../../../components/Dashboard";

/* Module components */
import {
  DetailBreadcrumb,
  DetailPayment,
  DetailState,
  PaymentRegisterForm,
  ViewBillBtn,
  OrderActionButtons,
  DetailProducts,
  DetailInconsistency,
} from "./subcomponents";

/* Hooks */
import { useParams } from "react-router-dom";
import { useConfirmModal } from "../../../../hooks";
import { useModal, usePayment, useProductsOrder } from "../../../hooks";

export const DashboardTableDetail = () => {
  const { code = "0" } = useParams();

  const { payment, isLoading } = usePayment(code);

  /* prettier-ignore */
  const { 
    productOrderQuery: products,
    orderStateQuery: orderState
  } = useProductsOrder(code);

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
      <OrderRegisterForm code={code} onClose={closeModal} />,
    );
  };

  const onRegisterPayment = (): void => {
    closeConfirmModal();

    openModal(
      "Register payment method",
      <PaymentRegisterForm inTable={code} onClose={closeModal} />,
    );
  };

  const onPaymentDetail = (): void => {
    openModal("Bill detail", <DetailPayment data={payment!} />);
  };

  const isLoadingData = products.isLoading || orderState.isPending;
  const existingProducts = !!products.data?.length;
  const canGenerateBill = !orderState.data?.count_pending && existingProducts;

  return (
    <main>
      <DetailBreadcrumb />
      {isLoading ? (
        <div className="text-end my-3">
          <Button loading={true}>.......</Button>
          <Button loading={true}>.......</Button>
        </div>
      ) : (
        <>
          {payment ? (
            <ViewBillBtn onClick={onPaymentDetail} disabled={isLoadingData} />
          ) : (
            <OrderActionButtons
              disabled={isLoadingData}
              canGenerateBill={canGenerateBill}
              onRegister={onRegister}
              onGenerateBill={openConfirmModal}
            />
          )}
        </>
      )}

      {existingProducts && (
        <DetailInconsistency orders={products} tableCode={code} />
      )}

      <TableSubtitle text={`Table #${code}`} />
      <DetailState orderState={orderState} />
      <DetailProducts products={products} tableCode={code} />
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
