/* Libs components */
import { Button } from "semantic-ui-react";

/* Components */
import { DynamicForm } from "@/shared";

/* Hooks */
import { useAuthTableForm, useAuthTableMutation } from "@/Client/hooks";

/* Interfaces */
import { ILoginRequest } from "@/Client/interfaces";

export const LoginTableForm = () => {
  const { isLoading, form } = useAuthTableForm();
  const mutate = useAuthTableMutation();

  const onLogin = (data: ILoginRequest) => mutate.mutate(data);

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
