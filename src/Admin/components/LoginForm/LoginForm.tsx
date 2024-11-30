/* Components */
import { DynamicForm } from "@/shared";

import { Button } from "semantic-ui-react";

/* Hooks */
import { useAuthMutation, useAuthForm } from "@/Admin/hooks";

/* Interfaces */
import { ILogin } from "@/Admin/interfaces";

import "./LoginForm.scss";

export const LoginForm = () => {
  const { isLoading, form } = useAuthForm();

  const mutate = useAuthMutation();

  const onLogin = (data: ILogin) => mutate.mutate(data);

  return (
    <DynamicForm
      isLoadingValues={isLoading}
      fields={form?.fields}
      onSubmit={onLogin}
    >
      <Button
        type="submit"
        content="Login"
        primary
        fluid
        loading={mutate.isPending}
      />
    </DynamicForm>
  );
};
