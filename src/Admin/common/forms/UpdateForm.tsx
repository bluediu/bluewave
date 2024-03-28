/* eslint-disable @typescript-eslint/no-explicit-any */
/* Libs components */
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

/* Components */
import { DynamicForm } from "../../../shared";

/* Interfaces */
import { IForm } from "../../interfaces";

/* Types */
import { UseQueryResult } from "@tanstack/react-query";

interface IProps {
  match?: string[];
  isPending: boolean;
  updateForm: UseQueryResult<IForm, Error>;
  onSubmit: (data: any) => void;
  onCloseModal: () => void;
}

export const UpdateForm = (props: IProps) => {
  const { match = [], isPending, onSubmit, onCloseModal, updateForm } = props;
  const { data, isLoading } = updateForm;

  return (
    <>
      <DynamicForm
        isLoadingValues={isLoading}
        fields={data?.fields}
        onSubmit={onSubmit}
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
