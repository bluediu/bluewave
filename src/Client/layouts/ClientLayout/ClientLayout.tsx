import { ReactElement } from "react";

/* Context */
import { CartProvider } from "@/Client/context";

/* Pages */
import { LoginClient } from "@/Client/pages";

/* Components */
import { Container } from "semantic-ui-react";

import { Menus } from "@/Client/components/Menus";

/* Hooks */
import { useTableContext } from "@/Client/hooks";

import "./ClientLayout.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const ClientLayout = ({ children }: IProps) => {
  const { table } = useTableContext();

  if (table === undefined) return <LoginClient />;

  return (
    <>
      <CartProvider>
        <Menus />
        <main className="main">
          <Container>
            <small className="text-secondary">Table #{table.code}</small>
            <section>{children}</section>
          </Container>
        </main>
      </CartProvider>
    </>
  );
};
