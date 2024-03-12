/* eslint-disable @typescript-eslint/no-explicit-any */

/* Libs components */
import { Link } from "react-router-dom";
import { Button, Divider, Icon, Loader, Table } from "semantic-ui-react";

/* Components */
import { TableSubtitle } from "./TableSubtitle";
import { IsActiveCell } from "./IsActiveCell";

/* Interfaces */
import { fn } from "../../utils";

interface IProps {
  data: Record<string, any> | undefined;
  title: string;
  goBackUrl: string;
  showAuditTrail?: boolean;
  fields: { label: string; value: string }[];
}

export const Detail = (props: IProps) => {
  const { data, title, goBackUrl, showAuditTrail = true, fields } = props;

  return (
    <>
      <section>
        <TableSubtitle text={title} />
        {data ? (
          <Table
            basic="very"
            collapsing
            size="large"
            className="table-borderless"
          >
            <Table.Body>
              {fields.map((field) => (
                <NormalRow
                  key={field.value}
                  label={field.label}
                  value={data[field.value]}
                />
              ))}

              {showAuditTrail && (
                <BasicTrail
                  created={data.created_at}
                  updated={data.updated_at}
                />
              )}
            </Table.Body>
          </Table>
        ) : (
          <Loader active inline="centered" className="mt-5" />
        )}
      </section>
      <div className="text-end">
        <Button icon labelPosition="left" as={Link} to={goBackUrl}>
          <Icon name="angle left" />
          Go back
        </Button>
      </div>
    </>
  );
};

export const NormalRow = (props: {
  label: string;
  value: string | number | boolean | undefined;
}) => {
  const { label, value } = props;
  return (
    <Table.Row className="no-border-bottom ">
      <Table.Cell className="text-secondary">{label}</Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell className="w-100">
        {typeof value === "boolean" ? (
          <IsActiveCell isActive={value} />
        ) : (
          value || "--------"
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export const BasicTrail = (props: { created: string; updated: string }) => {
  const { created, updated } = props;

  return (
    <>
      <Table.Row className="text-secondary">
        <Table.Cell colSpan={7}>
          <Divider fitted />
        </Table.Cell>
      </Table.Row>
      <Table.Row className="text-secondary">
        <Table.Cell>
          <small>Created at</small>
          <br />
          <small>Updated at</small>
        </Table.Cell>
        <Table.Cell>
          <small>{fn.formatDate(created)}</small>
          <br />
          <small>{fn.formatDate(updated)}</small>
        </Table.Cell>
      </Table.Row>
    </>
  );
};
