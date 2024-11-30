import { useEffect } from "react";

/* Components */
import { Button, Table } from "semantic-ui-react";

/* Hooks */
import { useNavigate } from "react-router-dom";

import { useClosePayment } from "@/Admin/hooks";

/* Interfaces */
import { IPayment } from "@/Admin/interfaces";

/* Constants */
import { ADMIN } from "@/Admin/constants";

/* Utils */
import { convertCentToDolar } from "@/utils";

interface IProps {
  data: IPayment;
}

export const PaymentDetail = ({ data }: IProps) => {
  const navigate = useNavigate();

  const mutate = useClosePayment(data.table);

  useEffect(() => {
    if (mutate.isSuccess) navigate(ADMIN);
  }, [mutate.isSuccess, navigate]);

  const onClose = () => mutate.mutate();

  return (
    <div className="payment-detail">
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="fw-bold">Code</Table.Cell>
            <Table.Cell className="text-primary">#{data.code}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="fw-bold">Table</Table.Cell>
            <Table.Cell>{data.table}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="fw-bold">Payment type</Table.Cell>
            <Table.Cell>{data.type}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="fw-bold" positive>
              Total
            </Table.Cell>
            <Table.Cell positive>$ {convertCentToDolar(data.total)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Button primary fluid onClick={onClose} loading={mutate.isPending}>
        Mark as paid and close the table
      </Button>
    </div>
  );
};
