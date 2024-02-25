import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { USERS } from "../../constants/paths";

export const MenuLeft = ({ pathname }: { pathname: string }) => {
  return (
    <Menu fixed="left" borderless className="side" vertical>
      {/* TODO: missing active prop */}
      <Menu.Item as={Link} to={USERS}>
        <Icon name="users" />
        Users
      </Menu.Item>

      <Menu.Item as={Link} to={USERS}>
        <Icon name="users" />
        Users
      </Menu.Item>

      <Menu.Item as={Link} to={USERS}>
        <Icon name="users" />
        Users
      </Menu.Item>

      <Menu.Item as={Link} to={USERS}>
        <Icon name="users" />
        Users
      </Menu.Item>

      <Menu.Item as={Link} to={USERS}>
        <Icon name="users" />
        Users
      </Menu.Item>

      <Menu.Item as={Link} to={USERS}>
        <Icon name="users" />
        Users
      </Menu.Item>
    </Menu>
  );
};
