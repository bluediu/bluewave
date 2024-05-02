/* Components */
import { Loader } from "semantic-ui-react";
import { CreateBtn } from "../../../common";
import { ModalBasic } from "../../../../shared";
import { TableSubtitle } from "../../../common/tables";
import { OrderRegisterForm } from "../../../components/Dashboard";
import { DetailBreadcrumb, DetailCard, DetailState } from "./subcomponents";

/* Hooks */
import { useParams } from "react-router-dom";
import { useModal, useProductsOrder } from "../../../hooks";

export const DashboardTableDetail = () => {
  const { code = "0" } = useParams();

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

  const onRegister = (): void => {
    openModal(
      `New order for table #${code}`,
      <OrderRegisterForm code={code} onClose={closeModal} />,
    );
  };

  return (
    <main>
      <DetailBreadcrumb />
      <CreateBtn onClick={onRegister} isLoading={false} />
      <TableSubtitle text={`Table #${code}`} />
      <DetailState orderState={orderState} />

      {products.isLoading ? (
        <Loader size="large" content={`Loading...`} active inline="centered" />
      ) : (
        products.data!.map((item) => (
          <DetailCard item={item} key={item.code} tableCode={code} />
        ))
      )}

      {!products.isLoading && !products.data?.length && (
        <TableSubtitle text="No orders found" className="text-center" />
      )}

      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        children={modalContent ?? <span>No content</span>}
      />
    </main>
  );
};
