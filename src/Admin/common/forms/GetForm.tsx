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
  getForm: UseQueryResult<IForm, Error>;
  onSubmit: (data: any) => void;
  onCloseModal: () => void;
}

export const GetForm = (props: IProps) => {
  const { getForm, onSubmit, onCloseModal } = props;
  const { data, isLoading } = getForm;

  return (
    <>
      <DynamicForm
        isLoadingValues={isLoading}
        fields={data?.fields}
        onSubmit={onSubmit}
        match={[]}
      >
        <div className="text-end">
          <ButtonGroup>
            <Button color="grey" type="button" onClick={onCloseModal}>
              Cancel
            </Button>
            <ButtonOr />
            <Button color="blue" type="submit">
              Search
            </Button>
          </ButtonGroup>
        </div>
      </DynamicForm>
    </>
  );
};
