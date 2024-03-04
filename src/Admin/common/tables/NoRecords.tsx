/* eslint-disable @typescript-eslint/no-explicit-any */

/* Libs components */
import { Header, Table } from "semantic-ui-react";

interface IProps {
  data: Record<string, any>[] | undefined;
  span: number;
}

export const NoRecords = ({ data, span }: IProps) => {
  return (
    <>
      {!data?.length && (
        <Table.Row>
          <Table.Cell colSpan={span} textAlign="center">
            <Header as="h4">No records found</Header>
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
};
