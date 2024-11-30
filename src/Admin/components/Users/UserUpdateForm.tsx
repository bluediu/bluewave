/* Components */
import { UpdateForm } from "@/Admin/common";

/* Hooks */
import { useUpdateForm, useUserUpdate } from "@/Admin/hooks";

/* Interfaces */
import { IForm, IUserUpdate } from "@/Admin/interfaces";

interface IProps {
  id: number;
  cache: string;
  match?: string[];

  onClose: () => void;
  getUpdateForm: (id: number) => Promise<IForm>;
}

export const UserUpdateForm = (props: IProps) => {
  const { id, cache, getUpdateForm, onClose } = props;

  // Mutation
  const mutation = useUserUpdate(id);

  // Get form query
  const updateForm = useUpdateForm({
    id,
    cache,
    getUpdateForm,
  });

  if (mutation.isSuccess || mutation.isError) {
    onClose();
    updateForm.refetch();
  }

  const handleSubmit = (data: IUserUpdate) => mutation.mutate(data);

  return (
    <UpdateForm
      isPending={mutation.isPending}
      updateForm={updateForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
