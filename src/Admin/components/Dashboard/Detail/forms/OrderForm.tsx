/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../../../common";

/* Hooks */
import { useOrderRegister, useOrderForm } from "../../../../hooks";

/* Interfaces */
import { IOrderRegister } from "../../../../interfaces";

interface IProps {
  code: string;
  onClose: () => void;
}

export const OrderForm = (props: IProps) => {
  const { code, onClose } = props;

  const [pending, setPending] = useState(false);

  // Mutation
  const mutation = useOrderRegister(code);
  const { isPending, isError, isSuccess } = mutation;

  // Get Form Query
  const form = useOrderForm(code);

  useEffect(() => setPending(isPending), [isPending]);

  if (isSuccess || isError) onClose();

  const handleSubmit = (data: IOrderRegister) => {
    data.table = code;
    mutation.mutate(data);
  };

  return (
    <CreateForm
      isPending={pending}
      createForm={form}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
