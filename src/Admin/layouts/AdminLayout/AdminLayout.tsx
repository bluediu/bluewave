import { ReactElement, useContext } from "react";

/* Context */
import { AuthContext } from "../../context";

/* Pages */
import { LoginAdmin } from "../../pages";

/* Components */
import { SideMenu } from "../../components/SideMenu";
import { TopMenu } from "../../components/TopMenu";

import "./AdminLayout.scss";

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