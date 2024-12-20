/* eslint-disable @typescript-eslint/no-explicit-any */

/* Libs components */
import { Link } from "react-router-dom";
import { Button, Divider, Icon, Image, Loader, Table } from "semantic-ui-react";

/* Components */
import { TableSubtitle } from "./TableSubtitle";
import { IsActiveCell } from "./IsActiveCell";

/* Interfaces */
import { useDeviceType } from "@/hooks";

/* Utils */
import { fn } from "@/utils";

/* Statics */
import NO_IMAGE from "/img/no-image.jpg";

interface IDetailField {
  label: string;
  value: string;
  relatedTo?: string;
  linkTo?: string;
}

interface IProps {
  data: Record<string, any> | undefined;
  title: string;
  goBackUrl: string;
  showAuditTrail?: boolean;
  renderImage?: boolean;
  related?: string[];
  fields: IDetailField[];
}

export const Detail = (props: IProps) => {
  const isTabletOrMobile = useDeviceType();
  const {
    data,
    title,
    goBackUrl,
    showAuditTrail = true,
    renderImage = false,
    fields,
    related,
  } = props;

  return (
    <>
      <section className="w-100">
        <TableSubtitle text={title} />

        {renderImage && (
          <Image
            src={
              data?.image
                ? `${import.meta.env.VITE_API_URL}${data?.image}`
                : NO_IMAGE
            }
            rounded
            size="medium"
            className="mb-4"
            centered={isTabletOrMobile}
          />
        )}

        {data ? (
          <Table
            basic="very"
            collapsing={!isTabletOrMobile}
            size="large"
            className="table-borderless"
          >
            <Table.Body>
              {fields.map((field) => {
                const isRelated = related?.includes(field.value);
                const isLink = !!field.linkTo;

                if (isRelated) {
                  return isLink ? (
                    <LinkRow
                      key={field.value}
                      label={field.label}
                      value={data[field.value][field.relatedTo!]}
                      link={`${fn.generateUrl(field.linkTo!, { id: data[field.value].id })}`}
                    />
                  ) : (
                    <NormalRow
                      key={field.value}
                      label={field.label}
                      value={data[field.value][field.relatedTo!]}
                    />
                  );
                } else {
                  return (
                    <NormalRow
                      key={field.value}
                      label={field.label}
                      value={data[field.value]}
                    />
                  );
                }
              })}

              {showAuditTrail && (
                <BasicTrail
                  isTabletOrMobile={isTabletOrMobile}
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
      <div className="text-end mt-4">
        <Button icon labelPosition="left" as={Link} to={goBackUrl}>
          <Icon name="angle left" />
          Go back
        </Button>
      </div>
    </>
  );
};

const NormalRow = (props: {
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
        ) : typeof value === "number" ? (
          fn.convertCentToDolar(value)
        ) : (
          value || "--------"
        )}
      </Table.Cell>
    </Table.Row>
  );
};

const LinkRow = (props: {
  label: string;
  value: string | number | boolean | undefined;
  link: string;
}) => {
  const { label, value, link } = props;

  return (
    <Table.Row className="no-border-bottom ">
      <Table.Cell className="text-secondary">{label}</Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        <Link to={link} target="_blank" rel="noopener noreferrer">
          {value}
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

const BasicTrail = (props: {
  created: string;
  updated: string;
  isTabletOrMobile: boolean;
}) => {
  const { created, updated, isTabletOrMobile } = props;

  return (
    <>
      {!isTabletOrMobile && (
        <Table.Row className="text-secondary">
          <Table.Cell colSpan={7}>
            <Divider fitted />
          </Table.Cell>
        </Table.Row>
      )}
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
