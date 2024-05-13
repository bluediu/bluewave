/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../common";

/* Hooks */
import { useTableCreate, useCreateForm } from "../../hooks";

/* Interfaces */
import { ITableCreate, IForm } from "../../interfaces";

interface IProps {
  cache: string;
  match?: string[];
  getCreateForm: () => Promise<IForm>;
  onClose: () => void;
}

export const TableCreateForm = (props: IProps) => {
  const { cache, getCreateForm, onClose } = props;

  const [pending, setPending] = useState(false);

  // Mutation
  const mutation = useTableCreate();
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const createForm = useCreateForm({ cache, getCreateForm });

  useEffect(() => setPending(isPending), [isPending]);

  if (isSuccess || isError) onClose();

  const handleSubmit = (data: ITableCreate) => mutation.mutate(data);

  return (
    <CreateForm
      isPending={pending}
      createForm={createForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
