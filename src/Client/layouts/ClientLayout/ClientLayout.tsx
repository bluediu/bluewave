import { ReactElement, useContext } from "react";

/* Components */
import { Container } from "semantic-ui-react";
import { Menus } from "../../components/Menus";

/* Context */
import { AuthTableContext } from "../../context";

/* Pages */
import { LoginClient } from "../../pages";

import "./ClientLayout.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const ClientLayout = ({ children }: IProps) => {
  const { isAuthenticated, code } = useContext(AuthTableContext);

  if (!isAuthenticated) return <LoginClient />;

  return (
    <>
      <Menus />
      <main className="main">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <Container>
          <small className="text-secondary">Table #{code}</small>
          <section className="main-content">{children}</section>
        </Container>
      </main>
    </>
  );
};
