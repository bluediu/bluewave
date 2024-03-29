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
import { ICategory } from "../../interfaces";

/* Types */
import { TFilter } from "../../types";

/* Constants */
import { CATEGORY_DETAIL } from "../../constants/paths";

const headers: string[] = ["ID", "Name", "Active", ""];

interface IProps {
  scope: string;
  query: UseQueryResult<ICategory[], Error>;
  onFilterChange: (value: TFilter) => void;
  onCategoryUpdate: (data: ICategory) => void;
}

export const TableCategories = (props: IProps) => {
  const { scope, query, onFilterChange, onCategoryUpdate } = props;
  const { isLoading, data: categories } = query;

  return (
    <>
      <TableStatusFilter
        onChange={onFilterChange}
        isLoading={query.isLoading}
      />
      <BasicTable
        isLoadingTable={isLoading}
        count={categories?.length}
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
          {categories?.map((category: ICategory) => (
            <Table.Row key={category.id}>
              <Table.Cell className="fit-to-content">
                <Link to={`${CATEGORY_DETAIL}/${category.id}`}>
                  # {category.id}
                </Link>
              </Table.Cell>
              <Table.Cell>{category.name}</Table.Cell>
              <Table.Cell className="status">
                <IsActiveCell isActive={category.is_active} />
              </Table.Cell>
              <Table.Cell className="fit-to-content">
                <Button
                  icon="edit"
                  className="m-0"
                  size="small"
                  content="Edit"
                  onClick={() => onCategoryUpdate(category)}
                  basic
                  circular
                />
              </Table.Cell>
            </Table.Row>
          ))}

          <NoRecords data={categories} span={headers.length} />
        </Table.Body>
      </BasicTable>
    </>
  );
};
