/* Libs components */
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

/* Components */
import {
  IsActiveCell,
  BasicTable,
  TableStatusFilter,
  NoRecords,
} from "@/Admin/common";

/* Hooks */
import { UseQueryResult } from "@tanstack/react-query";

/* Interfaces */
import { ITable } from "@/Admin/interfaces";

/* Types */
import { TFilter } from "@/Admin/types";

/* Utils */
import { generateUrl } from "@/utils";

/* Constants */
import { TABLE_DETAIL } from "@/Admin/constants";

const headers: string[] = ["ID", "Code", "Active", ""];

interface IProps {
  scope: string;
  query: UseQueryResult<ITable[], Error>;
  onFilterChange: (value: TFilter) => void;
  onUpdate: (data: ITable) => void;
}

export const TableTables = (props: IProps) => {
  const { scope, query, onFilterChange, onUpdate } = props;
  const { isLoading, data } = query;

  return (
    <>
      <TableStatusFilter
        onChange={onFilterChange}
        isLoading={query.isLoading}
      />
      <BasicTable isLoadingTable={isLoading} count={data?.length} scope={scope}>
        <Table.Header>
          <Table.Row>
            {headers.map((header) => (
              <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((table: ITable) => (
            <Table.Row key={table.id}>
              <Table.Cell className="fit-to-content">
                <Link to={generateUrl(TABLE_DETAIL, { id: table.id })}>
                  # {table.id}
                </Link>
              </Table.Cell>
              <Table.Cell>{table.code}</Table.Cell>
              <Table.Cell className="status">
                <IsActiveCell isActive={table.is_active} />
              </Table.Cell>
              <Table.Cell className="fit-to-content">
                <Button
                  icon="edit"
                  className="m-0"
                  size="small"
                  content="Edit"
                  onClick={() => onUpdate(table)}
                  basic
                  circular
                />
              </Table.Cell>
            </Table.Row>
          ))}

          <NoRecords data={data} span={headers.length} />
        </Table.Body>
      </BasicTable>
    </>
  );
};
