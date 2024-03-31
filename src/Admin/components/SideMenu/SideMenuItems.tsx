import { CSSProperties, useContext } from "react";

/* Libs */
import { toast } from "react-toastify";

/* Libs components */
import { Link } from "react-router-dom";
import { Divider, Header, Icon, SemanticICONS } from "semantic-ui-react";

/* Context */
import { AuthContext } from "../../context";

/* Data */
import { sidebarItems } from "./data";

interface IProps {
  pathname: string;
  isTabletOrMobile: boolean;
  handleMenuVisible: (value: boolean) => void;
}

export const SideMenuItems = (props: IProps) => {
  const { pathname, isTabletOrMobile, handleMenuVisible } = props;
  const { logoutAuthUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutAuthUser();
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
      <section>
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
        <a
          href={`${import.meta.env.VITE_API_URL}/admin/login/?next=/admin/`}
          target="_blank"
        >
          <aside className="sidebar-item admin-active-item">
            <Icon name="shield" className="ml-2" />

            <span className="ml-1">Advanced Admin</span>
          </aside>
        </a>
        <a href={`${import.meta.env.VITE_API_URL}/api/specs`} target="_blank">
          <aside className="sidebar-item">
            <Icon name="code" className="ml-2" />
            <span className="ml-1">API Specs</span>
          </aside>
        </a>
        <aside className="sidebar-item" onClick={handleLogout}>
          <Icon name="sign-out" className="ml-2" />
          <span className="ml-1">Log Out</span>
        </aside>
      </section>
    </nav>
  );
};
