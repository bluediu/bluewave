/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../common";

/* Hooks */
import { useCategoryCreate, useCreateForm } from "../../hooks";

/* Interfaces */
import { ICategoryCreate, IForm } from "../../interfaces";

interface IProps {
  cache: string;
  match?: string[];
  getCreateForm: () => Promise<IForm>;
  onClose: () => void;
}

export const CategoryCreateForm = (props: IProps) => {
  const { cache, getCreateForm, onClose } = props;

  const [pending, setPending] = useState(false);

  // Mutation
  const mutation = useCategoryCreate();
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const createForm = useCreateForm({ cache, getCreateForm });

  useEffect(() => setPending(isPending), [isPending]);

  if (isSuccess || isError) onClose();

  const handleSubmit = (data: ICategoryCreate) => mutation.mutate(data);

  return (
    <CreateForm
      isPending={pending}
      createForm={createForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
