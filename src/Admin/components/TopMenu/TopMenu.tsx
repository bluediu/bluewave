/* Libs components */
import { Icon, Menu } from "semantic-ui-react";

/* Components */
import { TopMenuInfo } from "./TopMenuInfo";

import "./TopMenu.scss";

interface IProps {
  toggleSidebar: () => void;
}

export const TopMenu = ({ toggleSidebar }: IProps) => {
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
        <TopMenuInfo />
      </Menu.Menu>
    </Menu>
  );
};
