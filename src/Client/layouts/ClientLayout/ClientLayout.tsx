import { ReactElement, useContext } from "react";

/* Context */
import { AuthTableContext } from "../../context";

/* Pages */
import { LoginClient } from "../../pages";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const ClientLayout = ({ children }: IProps) => {
  const { isAuthenticated } = useContext(AuthTableContext);

  if (!isAuthenticated) return <LoginClient />;

  return <div>{children}</div>;
};
