/* Components */
import { Link } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";

/* Constant */
import { ADMIN } from "@/Admin/constants";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <Link to={ADMIN}>
        <Breadcrumb.Section>Dashboard</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>Tables</Breadcrumb.Section>
      </Link>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section active>Table Orders</Breadcrumb.Section>
    </Breadcrumb>
  );
};
