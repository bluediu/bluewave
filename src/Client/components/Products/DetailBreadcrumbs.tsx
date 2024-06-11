/* Components */
import { Breadcrumb } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

/* Constants */
import { CLIENT } from "../../constants";

export const DetailBreadcrumbs = () => {
  const navigate = useNavigate();

  return (
    <Breadcrumb className="mt-4">
      <Link to={CLIENT}>
        <Breadcrumb.Section>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>Categories</Breadcrumb.Section>
      </Link>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section as={Link} onClick={() => navigate(-1)}>
        Products
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section active>Product detail</Breadcrumb.Section>
    </Breadcrumb>
  );
};
