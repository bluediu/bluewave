import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { MenuLeft } from "./MenuLeft";

import "./SideMenu.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const SideMenu = ({ children }: IProps) => {
  const { pathname } = useLocation();
  return (
    <section className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </section>
  );
};
