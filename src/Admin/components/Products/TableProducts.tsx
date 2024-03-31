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
import { IProduct } from "../../interfaces";

/* Types */
import { TFilter } from "../../types";

/* Constants */
import { PRODUCT_DETAIL } from "../../constants/paths";

/* utils */
import { fn } from "../../utils";

const headers: string[] = ["ID", "Name", "Category", "Active", "Price", ""];

interface IProps {
  scope: string;
  query: UseQueryResult<IProduct[], Error>;
  onFilterChange: (value: TFilter) => void;
  onProductUpdate: (data: IProduct) => void;
}

export const TableProducts = (props: IProps) => {
  const { scope, query, onFilterChange, onProductUpdate } = props;
  const { isLoading, data: products } = query;

  return (
    <>
      <TableStatusFilter
        onChange={onFilterChange}
        isLoading={query.isLoading}
      />
      <BasicTable
        isLoadingTable={isLoading}
        count={products?.length}
        scope={scope}
      >
        <Table.Header>
          <Table.Row>
            {headers.map((header) => (
              <Table.HeaderCell
                key={header}
                className={header === "Price" ? "text-end" : ""}
              >
                {header}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products?.map((product: IProduct) => (
            <Table.Row key={product.id}>
              <Table.Cell className="fit-to-content">
                <Link to={`${PRODUCT_DETAIL}/${product.id}`}>
                  # {product.id}
                </Link>
              </Table.Cell>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.category.name}</Table.Cell>
              <Table.Cell className="status">
                <IsActiveCell isActive={product.is_active} />
              </Table.Cell>
              <Table.Cell className="text-end">
                $ {fn.convertCentToDolar(product.price)}
              </Table.Cell>
              <Table.Cell className="fit-to-content">
                <Button
                  icon="edit"
                  className="m-0"
                  size="small"
                  content="Edit"
                  onClick={() => onProductUpdate(product)}
                  basic
                  circular
                />
              </Table.Cell>
            </Table.Row>
          ))}

          <NoRecords data={products} span={headers.length} />
        </Table.Body>
      </BasicTable>
    </>
  );
};
