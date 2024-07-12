/* Libs */
import { toast } from "react-toastify";

/* Context */
import { useContext } from "react";
import { AuthTableContext, CartContext } from "../../context";

/* Components */
import { Link, useLocation } from "react-router-dom";
import { Icon, Label, Menu } from "semantic-ui-react";

/* Constants */
import { clientPath } from "../../constants";

import "./Menus.scss";
import { useProductsOrder } from "../../../Admin/hooks";

export const Menus = () => {
  const { pathname } = useLocation();

  const { count } = useContext(CartContext);
  const { code } = useContext(AuthTableContext);
  const { logout } = useContext(AuthTableContext);

  // TODO: Use another API, next issue.
  const { productOrderQuery: products } = useProductsOrder({
    tableCode: code,
    scope: "client",
  });

  const handleLogout = () => {
    logout();
    toast.success("Logout successful");
  };

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
            {products.data?.length ? `+${products.data.length}` : "0"}
          </Label>
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
