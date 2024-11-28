/* Components */
import { CreateForm } from "@/Admin/common";

/* Hooks */
import { useOrderRegister, useOrderForm } from "@/Admin/hooks";

/* Interfaces */
import { IOrderRegister } from "@/Admin/interfaces";

interface IProps {
  code: string;
  onClose: () => void;
}

export const OrderForm = (props: IProps) => {
  const { code, onClose } = props;

  // Mutation
  const mutation = useOrderRegister(code);
  const { isPending, isError, isSuccess } = mutation;

  // Get Form Query
  const form = useOrderForm(code);

  const handleSubmit = (data: IOrderRegister) => {
    data.table = code;
    mutation.mutate(data);
  };

  if (isSuccess || isError) onClose();

  return (
    <CreateForm
      isPending={isPending}
      createForm={form}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
