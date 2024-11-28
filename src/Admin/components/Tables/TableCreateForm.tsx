/* Components */
import { CreateForm } from "@/Admin/common";

/* Hooks */
import { useTableCreate, useCreateForm } from "@/Admin/hooks";

/* Interfaces */
import { ITableCreate, IForm } from "@/Admin/interfaces";

interface IProps {
  cache: string;
  match?: string[];
  getCreateForm: () => Promise<IForm>;
  onClose: () => void;
}

export const TableCreateForm = (props: IProps) => {
  const { cache, getCreateForm, onClose } = props;

  // Mutation
  const mutation = useTableCreate();
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const createForm = useCreateForm({ cache, getCreateForm });

  const handleSubmit = (data: ITableCreate) => mutation.mutate(data);

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
