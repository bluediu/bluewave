/* Libs components */
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

/* Components */
import { IsActiveCell, BasicTable, NoRecords } from "../../common";

/* Hooks */
import { UseQueryResult } from "@tanstack/react-query";

/* Interfaces */
import { ICategoryProduct } from "../../interfaces";

/* Constants */
import { PRODUCT_DETAIL } from "../../constants";

/* Utils */
import { fn } from "../../../utils";

const headers: string[] = ["ID", "Name", "Category", "Active", "Price"];

interface IProps {
  scope: string;
  query: UseQueryResult<ICategoryProduct[], Error>;
}

export const SubTableProducts = (props: IProps) => {
  const { scope, query } = props;
  const { isLoading, data } = query;

  return (
    <>
      <BasicTable isLoadingTable={isLoading} count={data?.length} scope={scope}>
        <Table.Header>
          <Table.Row>
            {headers.map((header) => (
              <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((product: ICategoryProduct) => (
            <Table.Row key={product.id}>
              <Table.Cell className="fit-to-content">
                <Link to={fn.generateUrl(PRODUCT_DETAIL, { id: product.id })}>
                  # {product.id}
                </Link>
              </Table.Cell>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.category_name}</Table.Cell>
              <Table.Cell className="status">
                <IsActiveCell isActive={product.is_active} />
              </Table.Cell>
              <Table.Cell>${fn.convertCentToDolar(product.price)}</Table.Cell>
            </Table.Row>
          ))}

          <NoRecords data={data} span={headers.length} />
        </Table.Body>
      </BasicTable>
    </>
  );
};
