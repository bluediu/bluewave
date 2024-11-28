import { createContext, useLayoutEffect, useMemo, useState } from "react";

/* Libs */
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

/* Constants */
import { TOKEN } from "@/Client/constants";

/* Utils */
import { fn } from "@/utils";

interface ITable {
  code: string;
}

interface ITableContextType {
  table: undefined | ITable;

  login: (token: ITable) => void;
  logout: () => void;
}

export const AuthTableContext = createContext<ITableContextType>({
  table: undefined,

  login() {},
  logout() {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const AuthTableProvider: TProviderChildren = ({ children }) => {
  const queryClient = useQueryClient();

  const token: string | null = localStorage.getItem(TOKEN);

  const [table, setTable] = useState<undefined | ITable>(undefined);

  useLayoutEffect(() => {
    try {
      if (token) {
        const decodedToken = fn.decodeClientToken(token);
        const expirationTime: number = decodedToken.exp! * 1000;

        if (Date.now() >= expirationTime) {
          logout();
          toast.error("Session Expired: Please log in again.");
        } else {
          login(decodedToken);
        }
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      // Treat invalid token as expired & logout.
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const login = async (token: ITable) => setTable(token);

  const logout = () => {
    localStorage.removeItem(TOKEN);

    setTable(undefined);

    // Clean all queries on logout action.
    queryClient.clear();
  };

  const value: ITableContextType = useMemo(
    () => ({
      table,

      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table],
  );

  return (
    <AuthTableContext.Provider value={value}>
      {children}
    </AuthTableContext.Provider>
  );
};
