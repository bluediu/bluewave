import { ReactElement, useLayoutEffect, useState } from "react";

/* Pages */
import { LoginAdmin } from "@/Admin/pages";

/* Components */
import { TopMenu, SideMenu } from "@/Admin/components";

/* Hooks */
import { useDeviceType } from "@/hooks";

import { useAuthContext } from "@/Admin/hooks";

import "./AdminLayout.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const AdminLayout = ({ children }: IProps) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const isTabletOrMobile = useDeviceType();

  const { auth } = useAuthContext();

  useLayoutEffect(() => {
    isTabletOrMobile ? setSidebarVisible(false) : setSidebarVisible(true);
  }, [isTabletOrMobile]);

  if (auth === undefined) return <LoginAdmin />;

  return (
    <section className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
      </div>

      <div className="admin-layout__main-content">
        <SideMenu
          visible={sidebarVisible}
          isTabletOrMobile={isTabletOrMobile}
          handleMenuVisible={setSidebarVisible}
        >
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
