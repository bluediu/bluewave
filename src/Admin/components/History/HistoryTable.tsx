/* Libs components */
import { Button, Icon, Table } from "semantic-ui-react";

/* Components */
import { BasicTable, NoRecords } from "@/Admin/common";

/* Hooks */
import { UseQueryResult } from "@tanstack/react-query";

/* Interfaces */
import { IPayment } from "@/Admin/interfaces";

/* Utils */
import { fn } from "@/utils";

const headers: string[] = [
  "Code",
  "Table",
  "Payment type",
  "Created",
  "Total",
  "",
];

interface IProps {
  scope: string;
  query: UseQueryResult<IPayment[], Error>;
  onDetail: (code: string) => void;
}

export const HistoryTable = (props: IProps) => {
  const { scope, query, onDetail } = props;
  const { isLoading, data } = query;

  return (
    <>
      <BasicTable isLoadingTable={isLoading} count={data?.length} scope={scope}>
        <Table.Header>
          <Table.Row>
            {headers.map((header) => (
              <Table.HeaderCell
                key={header}
                className={header === "Total" ? "text-end" : ""}
              >
                {header}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((payment: IPayment) => (
            <Table.Row key={payment.code}>
              <Table.Cell className="fit-to-content">
                #{payment.code}
              </Table.Cell>
              <Table.Cell>{payment.table}</Table.Cell>
              <Table.Cell>
                {fn.capitalize(payment.type) === "Cash" ? (
                  <span>
                    <Icon name="dollar sign" />
                    {fn.capitalize(payment.type)}
                  </span>
                ) : (
                  <span>
                    <Icon name="credit card outline" />
                    {fn.capitalize(payment.type)}
                  </span>
                )}
              </Table.Cell>
              <Table.Cell>{fn.formatDate(payment.created_at)}</Table.Cell>
              <Table.Cell className="text-end">
                $ {fn.convertCentToDolar(payment.total)}
              </Table.Cell>
              <Table.Cell className="fit-to-content">
                <Button
                  icon="idea"
                  className="m-0"
                  size="small"
                  content="Detail"
                  onClick={() => onDetail(payment.code)}
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
