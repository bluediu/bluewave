import { ReactElement, useContext, useLayoutEffect, useState } from "react";

/* Pages */
import { LoginAdmin } from "../../pages";

/* Components */
import { SideMenu } from "../../components/SideMenu";
import { TopMenu } from "../../components/TopMenu";

/* Hooks */
import { useDeviceType } from "../../../hooks";

/* Context */
import { AuthContext } from "../../context";

import "./AdminLayout.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const AdminLayout = ({ children }: IProps) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const isTabletOrMobile = useDeviceType();

  const { isAuthenticated, userId } = useContext(AuthContext);

  useLayoutEffect(() => {
    isTabletOrMobile ? setSidebarVisible(false) : setSidebarVisible(true);
  }, [isTabletOrMobile]);

  if (!isAuthenticated) return <LoginAdmin />;

  return (
    <section className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu
          userId={userId}
          toggleSidebar={() => setSidebarVisible(!sidebarVisible)}
        />
      </div>

      <div className="admin-layout__main-content">
        <SideMenu visible={sidebarVisible} isTabletOrMobile={isTabletOrMobile}>
          <div
            className={`admin-layout__main-content 
              ${sidebarVisible ? "pushed" : ""}
            `}
          >
            {children}
          </div>
        </SideMenu>
      </div>
    </section>
  );
};
