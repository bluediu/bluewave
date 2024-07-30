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
import { ProductsFilter } from "./ProductsFilter";

/* Hooks */
import { UseQueryResult } from "@tanstack/react-query";

/* Interfaces */
import { IProduct } from "../../interfaces";

/* Types */
import { TFilter } from "../../types";

/* Constants */
import { PRODUCT_DETAIL } from "../../constants";

/* utils */
import { fn } from "../../../utils";

const headers: string[] = ["ID", "Name", "Category", "Active", "Price", ""];

interface IProps {
  scope: string;
  query: UseQueryResult<IProduct[], Error>;
  onFilterChange: (value: TFilter) => void;
  onCategoryChange: (id: number) => void;
  onUpdate: (data: IProduct) => void;
}

export const TableProducts = (props: IProps) => {
  const { scope, query, onFilterChange, onCategoryChange, onUpdate } = props;
  const { isLoading, data } = query;

  return (
    <>
      <section className="d-flex">
        <TableStatusFilter
          onChange={onFilterChange}
          isLoading={query.isLoading}
        />
        <ProductsFilter onChange={onCategoryChange} />
      </section>
      <BasicTable isLoadingTable={isLoading} count={data?.length} scope={scope}>
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
          {data?.map((product: IProduct) => (
            <Table.Row key={product.id}>
              <Table.Cell className="fit-to-content">
                <Link to={fn.generateUrl(PRODUCT_DETAIL, { id: product.id })}>
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
                  onClick={() => onUpdate(product)}
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
