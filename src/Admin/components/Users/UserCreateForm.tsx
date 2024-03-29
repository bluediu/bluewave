/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../common";

/* Hooks */
import { useCreateForm, useUserCreate } from "../../hooks";

/* Interfaces */
import { IForm, IUserCreate } from "../../interfaces";

interface IProps {
  cache: string;
  match?: string[];
  getCreateForm: () => Promise<IForm>;
  onClose: () => void;
}

export const UserCreateForm = (props: IProps) => {
  const { cache, getCreateForm, onClose } = props;

  const [pending, setPending] = useState(false);

  // User create mutation
  const mutation = useUserCreate();
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const createForm = useCreateForm({ cache, getCreateForm });

  useEffect(() => setPending(isPending), [isPending]);

  useEffect(() => {
    if (isSuccess || isError) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  const handleSubmit = (data: IUserCreate) => mutation.mutate(data);

  return (
    <CreateForm
      isPending={pending}
      createForm={createForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
