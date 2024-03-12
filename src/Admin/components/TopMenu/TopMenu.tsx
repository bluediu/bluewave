import { useContext } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { TopMenuUserInfo } from "./TopMenuUserInfo";
import { AuthContext } from "../../context";

import "./TopMenu.scss";
import { toast } from "react-toastify";

export const TopMenu = ({ userId }: { userId: number }) => {
  const { logoutAuthUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutAuthUser();
    toast.success("Logout successful");
  };

  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-admin__logo">
        <p className="fw-bold">
          <span className="app-title-color">Blue Wave</span> Admin
        </p>
      </Menu.Item>

      <Menu.Menu position="right">
        <TopMenuUserInfo userId={userId} />
        <Menu.Item onClick={handleLogout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
