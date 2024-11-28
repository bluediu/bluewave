/* Components */
import { CreateForm } from "@/Admin/common";

/* Hooks */
import { usePaymentForm, usePaymentRegister } from "@/Admin/hooks";

/* Interfaces */
import { IRegisterPayment } from "@/Admin/interfaces";

interface IProps {
  inTable: string;
  onClose: () => void;
}

export const PaymentForm = ({ inTable, onClose }: IProps) => {
  // Mutation
  const mutation = usePaymentRegister(inTable);
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const form = usePaymentForm();

  const handleSubmit = (data: IRegisterPayment) => {
    mutation.mutate({ type: data.type.toUpperCase(), table: inTable });
  };

  if (isSuccess || isError) onClose();

  return (
    <>
      <CreateForm
        isPending={isPending}
        createForm={form}
        onCloseModal={onClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};
