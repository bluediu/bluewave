import { ReactElement, useContext } from "react";

import { AuthContext } from "../context";
import { LoginAdmin } from "../pages";
import { SideMenu } from "../components/SideMenu";

import "./AdminLayout.scss";
import { TopMenu } from "../components/TopMenu";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const AdminLayout = ({ children }: IProps) => {
  const { isAuthenticated, userId } = useContext(AuthContext);

  if (!isAuthenticated) return <LoginAdmin />;

  return (
    <section className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu userId={userId} />
      </div>

      <div className="admin-layout__main-content">
        <SideMenu>{children}</SideMenu>
      </div>
    </section>
  );
};
