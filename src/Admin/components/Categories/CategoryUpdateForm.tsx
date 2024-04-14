/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { UpdateForm } from "../../common";

/* Hooks */
import { useCategoryUpdate, useUpdateForm } from "../../hooks";

/* Interfaces */
import { ICategoryUpdate, IForm } from "../../interfaces";

interface IProps {
  cache: string;
  id: number;
  match?: string[];
  getUpdateForm: (id: number) => Promise<IForm>;
  onClose: () => void;
}

export const CategoryUpdateForm = (props: IProps) => {
  const { id, cache, getUpdateForm, onClose } = props;

  const [pending, setPending] = useState(false);

  // Mutation
  const mutation = useCategoryUpdate(id);
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const updateForm = useUpdateForm({
    id,
    cache,
    getUpdateForm,
  });

  useEffect(() => setPending(isPending), [isPending]);

  useEffect(() => {
    if (isSuccess || isError) {
      onClose();
      updateForm.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  const handleSubmit = (data: ICategoryUpdate) => mutation.mutate(data);

  return (
    <UpdateForm
      isPending={pending}
      updateForm={updateForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
