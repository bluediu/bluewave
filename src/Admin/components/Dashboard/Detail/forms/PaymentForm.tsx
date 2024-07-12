import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../../../common";

/* Hooks */
import { usePaymentForm, usePaymentRegister } from "../../../../hooks";

/* Interfaces */
import { IRegisterPayment } from "../../../../interfaces";

interface IProps {
  inTable: string;
  onClose: () => void;
}

export const PaymentForm = ({ inTable, onClose }: IProps) => {
  const [pending, setPending] = useState(false);

  // Mutation
  const mutation = usePaymentRegister(inTable);
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const form = usePaymentForm();

  useEffect(() => setPending(isPending), [isPending]);

  if (isSuccess || isError) onClose();

  const handleSubmit = (data: IRegisterPayment) => {
    mutation.mutate({ type: data.type.toUpperCase(), table: inTable });
  };

  return (
    <>
      <CreateForm
        isPending={pending}
        createForm={form}
        onCloseModal={onClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};
