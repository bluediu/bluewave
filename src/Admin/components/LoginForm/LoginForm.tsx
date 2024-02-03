import { Button } from "semantic-ui-react";

import { useAuthForm } from "../../hooks/forms";
import { useUserMutation } from "../../hooks/users";
import { IAuthLogin } from "../../interfaces";
import { DynamicForm } from "../../../common/Form";

import "./LoginForm.scss";

export const LoginForm = () => {
  const { isLoading, form } = useAuthForm();
  const { loginMutation } = useUserMutation();

  const onLogin = (data: IAuthLogin) => loginMutation.mutate(data);

  return (
    <>
      <DynamicForm
        isLoadingValues={isLoading}
        fields={form?.fields}
        onSubmitFunc={onLogin}
      >
        <Button
          type="submit"
          content="Login"
          primary
          fluid
          loading={loginMutation.isPending}
        />
      </DynamicForm>
    </>
  );
};
