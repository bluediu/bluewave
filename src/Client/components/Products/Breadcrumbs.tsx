/* Components */
import { Link } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";

/* Constants */
import { CLIENT } from "@/Client/constants";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb className="mt-4">
      <Link to={CLIENT}>
        <Breadcrumb.Section>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>Categories</Breadcrumb.Section>
      </Link>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section active>Products</Breadcrumb.Section>
    </Breadcrumb>
  );
};
