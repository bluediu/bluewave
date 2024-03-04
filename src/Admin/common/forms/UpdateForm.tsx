/* eslint-disable @typescript-eslint/no-explicit-any */
/* Libs components */
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

/* Components */
import { DynamicForm } from "../../../shared";

/* Hooks */
import { useUpdateForm } from "../../hooks";

/* Interfaces */
import { IForm } from "../../interfaces";

interface IProps {
  cache: string;
  match?: string[];
  entityId: number;
  isPending: boolean;
  getUpdateForm: (id: number) => Promise<IForm>;
  onSubmit: (data: any) => void;
  onCloseModal: () => void;
}

export const UpdateForm = (props: IProps) => {
  const {
    cache,
    match = [],
    entityId,
    isPending,
    getUpdateForm,
    onSubmit,
    onCloseModal,
  } = props;

  const updateForm = useUpdateForm({ id: entityId, cache, getUpdateForm });

  return (
    <>
      <DynamicForm
        isLoadingValues={updateForm.isLoading}
        fields={updateForm.data?.fields}
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
            <Button color="yellow" loading={isPending} type="submit">
              Update
            </Button>
          </ButtonGroup>
        </div>
      </DynamicForm>
    </>
  );
};
