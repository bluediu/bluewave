/* Libs components */
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

/* Components */
import {
  IsActiveCell,
  BasicTable,
  TableStatusFilter,
  NoRecords,
} from "../../common";

/* Hooks */
import { UseQueryResult } from "@tanstack/react-query";

/* Interfaces */
import { IUser } from "../../interfaces";
import { USER_DETAIL } from "../../constants/paths";

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
  onUserUpdate: (data: IUser) => void;
}

export type TFilter = "all" | "actives" | "inactives";

export const TableUsers = (props: IProps) => {
  const { scope, query, onFilterChange, onUserUpdate } = props;
  const { isLoading, data: users } = query;

  return (
    <>
      <TableStatusFilter
        onChange={onFilterChange}
        isLoading={query.isLoading}
      />
      <BasicTable
        isLoadingTable={isLoading}
        count={users?.length}
        scope={scope}
      >
        <Table.Header>
          <Table.Row>
            {headers.map((header) => (
              <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users?.map((user: IUser) => (
            <Table.Row key={user.id}>
              <Table.Cell className="fit-to-content">
                <Link to={`${USER_DETAIL}/${user.id}`}># {user.id}</Link>
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
                  onClick={() => onUserUpdate(user)}
                  basic
                  circular
                />
              </Table.Cell>
            </Table.Row>
          ))}

          <NoRecords data={users} span={headers.length} />
        </Table.Body>
      </BasicTable>
    </>
  );
};
