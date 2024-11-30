/* Components */
import { UpdateForm } from "@/Admin/common";

/* Hooks */
import { useTableUpdate, useUpdateForm } from "@/Admin/hooks";

/* Interfaces */
import { ITableUpdate, IForm } from "@/Admin/interfaces";

interface IProps {
  cache: string;
  id: number;
  match?: string[];
  getUpdateForm: (id: number) => Promise<IForm>;
  onClose: () => void;
}

export const TableUpdateForm = (props: IProps) => {
  const { id, cache, getUpdateForm, onClose } = props;

  // Mutation
  const mutation = useTableUpdate(id);
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const updateForm = useUpdateForm({
    id,
    cache,
    getUpdateForm,
  });

  const handleSubmit = (data: ITableUpdate) => mutation.mutate(data);

  if (isSuccess || isError) {
    onClose();
    updateForm.refetch();
  }

  return (
    <UpdateForm
      isPending={isPending}
      updateForm={updateForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
