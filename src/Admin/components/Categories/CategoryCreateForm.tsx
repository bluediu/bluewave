/* Components */
import { CreateForm } from "@/Admin/common";

/* Hooks */
import { useCategoryCreate, useCreateForm } from "@/Admin/hooks";

/* Interfaces */
import { ICategoryCreate, IForm } from "@/Admin/interfaces";

interface IProps {
  cache: string;
  match?: string[];

  onClose: () => void;
  getCreateForm: () => Promise<IForm>;
}

export const CategoryCreateForm = (props: IProps) => {
  const { cache, getCreateForm, onClose } = props;

  // Mutation
  const mutation = useCategoryCreate();
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const createForm = useCreateForm({ cache, getCreateForm });

  const handleSubmit = (data: ICategoryCreate) => mutation.mutate(data);

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
