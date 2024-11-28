/* Components */
import { CreateForm } from "@/Admin/common";

/* Hooks */
import { useCreateForm, useUserCreate } from "@/Admin/hooks";

/* Interfaces */
import { IForm, IUserCreate } from "@/Admin/interfaces";

interface IProps {
  cache: string;
  match?: string[];

  onClose: () => void;
  getCreateForm: () => Promise<IForm>;
}

export const UserCreateForm = (props: IProps) => {
  const { cache, getCreateForm, onClose } = props;

  // Mutation
  const mutation = useUserCreate();

  // Get form query
  const createForm = useCreateForm({ cache, getCreateForm });

  if (createForm.isSuccess || createForm.isError) onClose();

  const handleSubmit = (data: IUserCreate) => mutation.mutate(data);

  return (
    <CreateForm
      isPending={createForm.isPending}
      createForm={createForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
