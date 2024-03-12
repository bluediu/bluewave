/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { UpdateForm } from "../../common";

/* Hooks */
import { useUserUpdate } from "../../hooks";

/* Interfaces */
import { IForm } from "../../interfaces";

interface IProps {
  cache: string;
  entityId: number;
  match?: string[];
  getUpdateForm: (id: number) => Promise<IForm>;
  onCloseModal: () => void;
}

export const UserUpdateForm = (props: IProps) => {
  const [pending, setPending] = useState(false);
  const mutation = useUserUpdate(props.entityId);
  const { isPending, isError, isSuccess } = mutation;

  const handleSubmit = (data: any) => mutation.mutate(data);

  useEffect(() => setPending(isPending), [isPending]);

  useEffect(() => {
    if (isSuccess || isError) props.onCloseModal();
  }, [isSuccess, isError, props]);

  return <UpdateForm {...props} isPending={pending} onSubmit={handleSubmit} />;
};
