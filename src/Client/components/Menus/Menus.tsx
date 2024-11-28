/* Components */
import { Link, useLocation } from "react-router-dom";
import { Icon, Label, Menu } from "semantic-ui-react";

/* Hooks */
import { useOrderCount, useTableContext, useCartContext } from "@/Client/hooks";

/* Constants */
import { clientPath } from "@/Client/constants";

import "./Menus.scss";

export const Menus = () => {
  const { pathname } = useLocation();

  // Context
  const { count } = useCartContext();

  const { table, logout } = useTableContext();

  // Queries
  const { data } = useOrderCount(table!.code);

  const getBasePath = (path: string) => {
    const parts = path.split("/");
    return `/${parts[1]}/${parts[2] ? parts[2].split(":")[0] : ""}`;
  };

  const basePath = getBasePath(pathname);

  const isMenuActive =
    basePath === getBasePath(clientPath.CLIENT) ||
    pathname.startsWith(basePath);

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
        <Menu.Item
          as={Link}
          to={clientPath.CLIENT}
          active={isMenuActive}
          className="cursor-pointer"
        >
          <Icon name="list layout" />
          Menu
        </Menu.Item>
        <Menu.Item
          className="cursor-pointer"
          as={Link}
          to={clientPath.CART}
          active={pathname.startsWith(clientPath.CART)}
        >
          <Icon name="cart arrow down" />
          <Label color="teal" floating>
            {count ? `+${count}` : "0"}
          </Label>
          Cart
        </Menu.Item>
        <Menu.Item
          className="cursor-pointer"
          as={Link}
          to={clientPath.ORDERS}
          active={pathname.startsWith(clientPath.ORDERS)}
        >
          <Icon name="bell" />
          <Label color="violet" floating>
            {data?.count ? `+${data.count}` : 0}
          </Label>
          Orders
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item className="text-secondary cursor-pointer" onClick={logout}>
            <Icon name="sign out" color="grey" />
            <span className="text-secondary">Exit</span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </section>
  );
};
