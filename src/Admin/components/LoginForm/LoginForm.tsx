/* Libs components */
import { Button } from "semantic-ui-react";

/* Components */
import { DynamicForm } from "../../../shared";

/* Hooks */
import { useAuthMutation, useAuthForm } from "../../hooks";

/* Interfaces */
import { IAuthLogin } from "../../interfaces";

import "./LoginForm.scss";

export const LoginForm = () => {
  const { isLoading, form } = useAuthForm();
  const mutate = useAuthMutation();

  const onLogin = (data: IAuthLogin) => mutate.mutate(data);

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
