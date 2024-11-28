/* eslint-disable @typescript-eslint/no-explicit-any */
/* Libs components */
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

/* Components */
import { DynamicForm } from "@/shared";

/* Interfaces */
import { IForm } from "@/Admin/interfaces";

/* Types */
import { UseQueryResult } from "@tanstack/react-query";

interface IProps {
  match?: string[];
  isPending: boolean;
  createForm: UseQueryResult<IForm, Error>;
  onSubmit: (data: any) => void;
  onCloseModal: () => void;
}

export const CreateForm = (props: IProps) => {
  const { match = [], isPending, createForm, onSubmit, onCloseModal } = props;
  const { data, isLoading } = createForm;

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
            <Button color="teal" loading={isPending} type="submit">
              Create
            </Button>
          </ButtonGroup>
        </div>
      </DynamicForm>
    </>
  );
};
