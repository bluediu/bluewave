import { ReactElement, useContext } from "react";

import { AuthContext } from "../context";
import { LoginAdmin } from "../pages";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const AdminLayout = ({ children }: IProps) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) return <LoginAdmin />;

  return (
    <section className="admin-layout">
      <div className="admin-layout__menu">
        <h1>ADMIN MENU</h1>
        {children}
      </div>
    </section>
  );
};
