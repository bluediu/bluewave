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
import { IUser } from "@/Admin/interfaces";

/* Types */
import { TFilter } from "@/Admin/types";

/* Utils */
import { generateUrl } from "@/utils";

/* Constants */
import { USER_DETAIL } from "@/Admin/constants";

const headers: string[] = [
  "ID",
  "Username",
  "Full name",
  "E-mail",
  "Active",
  "",
];

interface IProps {
  scope: string;
  query: UseQueryResult<IUser[], Error>;
  onFilterChange: (value: TFilter) => void;
  onUpdate: (data: IUser) => void;
}

export const TableUsers = (props: IProps) => {
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
          {data?.map((user: IUser) => (
            <Table.Row key={user.id}>
              <Table.Cell className="fit-to-content">
                <Link to={generateUrl(USER_DETAIL, { id: user.id })}>
                  # {user.id}
                </Link>
              </Table.Cell>
              <Table.Cell>{user.username}</Table.Cell>
              <Table.Cell>
                {user?.first_name || user?.last_name
                  ? `${user?.first_name} ${user?.last_name}`
                  : "--------"}
              </Table.Cell>
              <Table.Cell>{user.email || "--------"}</Table.Cell>
              <Table.Cell className="status">
                <IsActiveCell isActive={user.is_active} />
              </Table.Cell>
              <Table.Cell className="fit-to-content">
                <Button
                  icon="edit"
                  className="m-0"
                  size="small"
                  content="Edit"
                  onClick={() => onUpdate(user)}
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
