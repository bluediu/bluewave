import { ReactElement, useContext } from "react";

/* Context */
import { AuthTableContext, CartProvider } from "../../context";

/* Pages */
import { LoginClient } from "../../pages";

/* Components */
import { Container } from "semantic-ui-react";
import { Menus } from "../../components/Menus";

import "./ClientLayout.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const ClientLayout = ({ children }: IProps) => {
  const { isAuthenticated, code } = useContext(AuthTableContext);

  if (!isAuthenticated) return <LoginClient />;

  return (
    <>
      <CartProvider>
        <Menus />
        <main className="main">
          <Container>
            <small className="text-secondary">Table #{code}</small>
            <section>{children}</section>
          </Container>
        </main>
      </CartProvider>
    </>
  );
};
