/* Libs */
import { toast } from "react-toastify";

/* Context */
import { useContext } from "react";
import { AuthTableContext } from "../../context";

/* Components */
import { Icon, Menu } from "semantic-ui-react";

import "./Menus.scss";

export const Menus = () => {
  const { logout } = useContext(AuthTableContext);

  const handleLogout = () => {
    logout();
    toast.success("Logout successful");
  };

  return (
    <section>
      <Menu fluid compact className="top-menu-one">
        <Menu.Item className="top-menu-one__items w-100">
          <p className="top-menu-one__title-size fw-bold ml-2">
            <span className="app-title-color">Blue Wave</span>
          </p>
        </Menu.Item>
      </Menu>

      <Menu pointing secondary className="top-menu-two">
        <Menu.Item active className="cursor-pointer">
          <Icon name="list layout" />
          Menu
        </Menu.Item>
        <Menu.Item className="cursor-pointer">
          <Icon name="cart arrow down" />
          Cart
        </Menu.Item>
        <Menu.Item className="cursor-pointer">
          <Icon name="bell" />
          Orders
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            className="text-secondary cursor-pointer"
            onClick={handleLogout}
          >
            <Icon name="sign out" color="grey" />
            <span className="text-secondary">Exit</span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </section>
  );
};
