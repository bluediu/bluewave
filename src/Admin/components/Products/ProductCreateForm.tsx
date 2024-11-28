/* Components */
import { CreateForm } from "@/Admin/common";

/* Hooks */
import { useCreateForm, useProductCreate } from "@/Admin/hooks";

/* Interfaces */
import { IProductCreate, IForm } from "@/Admin/interfaces";

interface IProps {
  cache: string;
  match?: string[];

  onClose: () => void;
  getCreateForm: () => Promise<IForm>;
}

export const ProductCreateForm = (props: IProps) => {
  const { cache, getCreateForm, onClose } = props;

  // Mutation
  const mutation = useProductCreate();
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const createForm = useCreateForm({ cache, getCreateForm });

  const handleSubmit = (data: IProductCreate) => mutation.mutate(data);

  if (isSuccess || isError) onClose();

  return (
    <CreateForm
      isPending={isPending}
      createForm={createForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
