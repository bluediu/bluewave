/* Libs components */
import { Icon, Menu } from "semantic-ui-react";

/* Components */
import { TopMenuUserInfo } from "./TopMenuUserInfo";

import "./TopMenu.scss";

interface IProps {
  userId: number;
  toggleSidebar: () => void;
}

export const TopMenu = ({ userId, toggleSidebar }: IProps) => {
  return (
    <Menu fixed="top" className="top-menu-admin py-1">
      <Menu.Item className="top-admin__logo">
        <Icon
          name="bars"
          onClick={toggleSidebar}
          size="large"
          className="app-title-color cursor-pointer "
        />
        <p className="fw-bold ml-2">
          <span className="app-title-color">Blue Wave</span> Admin
        </p>
      </Menu.Item>

      <Menu.Menu position="right">
        <TopMenuUserInfo userId={userId} />
      </Menu.Menu>
    </Menu>
  );
};
