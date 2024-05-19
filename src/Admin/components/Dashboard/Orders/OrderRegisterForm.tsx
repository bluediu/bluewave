/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/* Components */
import { CreateForm } from "../../../common";

/* Hooks */
import { useOrderRegister } from "../../../hooks";

/* Interfaces */
import { IOrderRegister } from "../../../interfaces";
import { useQuery } from "@tanstack/react-query";
import { adminActions } from "../../../services";

interface IProps {
  code: string;
  onClose: () => void;
}

export const OrderRegisterForm = (props: IProps) => {
  const { code, onClose } = props;

  const [pending, setPending] = useState(false);

  // Mutation
  const mutation = useOrderRegister(code);
  const { isPending, isError, isSuccess } = mutation;

  // Get form query
  const registerForm = useQuery({
    queryKey: ["orderRegisterForm", code],
    queryFn: () => adminActions.forms.getRegisterOrderForm(code),
    refetchOnWindowFocus: false,
    staleTime: 86400000, // One day
  });

  useEffect(() => setPending(isPending), [isPending]);

  if (isSuccess || isError) onClose();

  const handleSubmit = (data: IOrderRegister) => {
    data.table = code;
    mutation.mutate(data);
  };

  return (
    <CreateForm
      isPending={pending}
      createForm={registerForm}
      onCloseModal={onClose}
      onSubmit={handleSubmit}
    />
  );
};
