/* eslint-disable @typescript-eslint/no-explicit-any */
/* Libs components */
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

/* Components */
import { DynamicForm } from "../../../shared";

/* Hooks */
import { useCreateForm } from "../../hooks/";

/* Interfaces */
import { IForm } from "../../interfaces";

interface IProps {
  cache: string;
  match?: string[];
  isPending: boolean;
  getCreateForm: () => Promise<IForm>;
  onSubmit: (data: any) => void;
  onCloseModal: () => void;
}

export const CreateForm = (props: IProps) => {
  const {
    cache,
    match = [],
    isPending,
    getCreateForm,
    onSubmit,
    onCloseModal,
  } = props;

  const createForm = useCreateForm({ cache, getCreateForm });

  return (
    <>
      <DynamicForm
        isLoadingValues={createForm.isLoading}
        fields={createForm.data?.fields}
        onSubmitFunc={onSubmit}
        match={match}
      >
        <div className="text-end">
          <ButtonGroup>
            <Button
              color="grey"
              type="button"
              disabled={isPending}
              onClick={onCloseModal}
            >
              Cancel
            </Button>
            <ButtonOr />
            <Button color="teal" loading={isPending} type="submit">
              Create
            </Button>
          </ButtonGroup>
        </div>
      </DynamicForm>
    </>
  );
};
