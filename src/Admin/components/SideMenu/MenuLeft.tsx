import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { USERS } from "../../constants/paths";

export const MenuLeft = ({ pathname }: { pathname: string }) => {
  // TODO: Implement a permission system to be able to show or hide
  // app modules, allow staff user only & list permissions.
  // TODO: Change this using default sidebar from semantic-ui-react.
  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={USERS} active={pathname.startsWith(USERS)}>
        <Icon name="users" />
        Users
      </Menu.Item>
    </Menu>
  );
};
