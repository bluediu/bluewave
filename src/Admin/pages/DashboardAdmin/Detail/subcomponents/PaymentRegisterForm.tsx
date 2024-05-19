import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../../../common";

/* Hooks */
import { useCreateForm, usePaymentRegister } from "../../../../hooks";

/* Interfaces */
import { IRegisterPayment } from "../../../../interfaces";

/* Services */
import { adminActions } from "../../../../services";

interface IProps {
  inTable: string;
  onClose: () => void;
}

export const PaymentRegisterForm = ({ inTable, onClose }: IProps) => {
  const [pending, setPending] = useState(false);

  // Mutation
  const mutation = usePaymentRegister(inTable);
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const createForm = useCreateForm({
    cache: "paymentRegisterForm",
    getCreateForm: adminActions.forms.getRegisterPaymentForm,
  });

  useEffect(() => setPending(isPending), [isPending]);

  if (isSuccess || isError) onClose();

  const handleSubmit = (data: IRegisterPayment) => {
    mutation.mutate({ type: data.type.toUpperCase(), table: inTable });
  };

  return (
    <>
      <CreateForm
        isPending={pending}
        createForm={createForm}
        onCloseModal={onClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};
