/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../common";

/* Hooks */
import { useUserCreate } from "../../hooks";

/* Interfaces */
import { IForm } from "../../interfaces";

interface IProps {
  cache: string;
  match?: string[];
  getCreateForm: () => Promise<IForm>;
  onCloseModal: () => void;
}

export const UserCreateForm = (props: IProps) => {
  const [pending, setPending] = useState(false);
  const { userCreateMutation: mutation } = useUserCreate();
  const { isPending, isError, isSuccess } = mutation;

  const handleSubmit = (data: any) => mutation.mutate(data);

  useEffect(() => {
    setPending(isPending);
  }, [isPending]);

  useEffect(() => {
    if (isSuccess || isError) {
      props.onCloseModal();
    }
  }, [isSuccess, isError, props]);

  return <CreateForm {...props} isPending={pending} onSubmit={handleSubmit} />;
};
