import { CSSProperties, useLayoutEffect, useRef } from "react";

/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Link } from "react-router-dom";

import { Divider, Header, Icon, SemanticICONS } from "semantic-ui-react";

/* Context */
import { useAuthContext } from "@/Admin/hooks";

/* Constants */
import { ADMIN } from "@/Admin/constants";

/* Data */
import { sidebarItems } from "./data";

interface IProps {
  pathname: string;
  isTabletOrMobile: boolean;
  handleMenuVisible: (value: boolean) => void;
}

export const SideMenuItems = (props: IProps) => {
  const { pathname, isTabletOrMobile, handleMenuVisible } = props;
  const { auth, logout } = useAuthContext();

  const sidebarItemsRef = useRef<HTMLElement | null>(null);

  /*
   * Check if there are more than one active item in the sidebar.
   * If there are more than one active item, the first active item
   * will be removed.
   */
  useLayoutEffect(() => {
    if (sidebarItemsRef.current) {
      const { current: item } = sidebarItemsRef;

      const checkActiveItemConstraint: boolean =
        item.getElementsByClassName("active-item").length > 1;

      if (pathname === ADMIN) {
        item
          .getElementsByClassName("sidebar-item")[0]
          .classList.add("active-item");
      }

      if (checkActiveItemConstraint) {
        item
          .getElementsByClassName("sidebar-item")[0]
          .classList.remove("active-item");
      }
    }
  }, [pathname]);

  const handleLogout = () => {
    logout();
    toast.success("Logout successful");
  };

  const desktopStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "start",
    minHeight: "100%",
  };

  return (
    <nav style={!isTabletOrMobile ? desktopStyles : {}}>
      <section ref={sidebarItemsRef}>
        {sidebarItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <aside
              className={`sidebar-item ${
                pathname.startsWith(item.path) && "active-item"
              }`}
              onClick={() => isTabletOrMobile && handleMenuVisible(false)}
            >
              <Icon name={item.icon as SemanticICONS} className="ml-2" />
              <span className="ml-1">{item.name}</span>
            </aside>
          </Link>
        ))}
      </section>

      <section>
        <Divider horizontal>
          <Header as="h4">
            <small>Actions</small>
          </Header>
        </Divider>
        {auth!.superuser && (
          <>
            <a
              href={`${import.meta.env.VITE_API_URL}/admin/login/?next=/admin/`}
              target="_blank"
            >
              <aside className="sidebar-item admin-active-item">
                <Icon name="shield" className="ml-2" />
                <span className="ml-1">Super Admin</span>
              </aside>
            </a>
            <a
              href={`${import.meta.env.VITE_API_URL}/api/specs`}
              target="_blank"
            >
              <aside className="sidebar-item">
                <Icon name="code" className="ml-2" />
                <span className="ml-1">API Specs</span>
              </aside>
            </a>
          </>
        )}
        <aside className="sidebar-item" onClick={handleLogout}>
          <Icon name="sign-out" className="ml-2" />
          <span className="ml-1">Log Out</span>
        </aside>
      </section>
    </nav>
  );
};
