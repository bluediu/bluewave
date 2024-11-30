import { createContext, useLayoutEffect, useMemo, useState } from "react";

/* Hooks */
import { toast } from "react-toastify";

import { useQueryClient } from "@tanstack/react-query";

/* Interfaces */
import { IUserToken } from "@/Admin/interfaces";

/* Utils */
import { decodeAdminToken } from "@/utils";

/* Constants */
import { TOKEN } from "@/Admin/constants";

interface IAuthContextType {
  auth: undefined | IUserToken;

  login: (user: IUserToken) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextType>({
  auth: undefined,

  login() {},
  logout() {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const AuthProvider: TProviderChildren = ({ children }) => {
  const queryClient = useQueryClient();

  const token: string | null = localStorage.getItem(TOKEN);

  const [auth, setAuth] = useState<undefined | IUserToken>(undefined);

  useLayoutEffect(() => {
    try {
      if (token) {
        const decodedToken = decodeAdminToken(token);
        const expirationTime: number = decodedToken.exp! * 1000;

        if (Date.now() >= expirationTime) {
          logout();
          toast.error("Session Expired: Please log in again.");
        } else login(decodedToken);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      // Treat invalid token as expired, logout the user
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const login = async (user: IUserToken) => setAuth(user);

  const logout = () => {
    localStorage.removeItem(TOKEN);

    setAuth(undefined);

    // Clean all queries on logout action.
    queryClient.clear();
  };

  // `useMemo` to optimize re-renders if auth data is passed to other components.
  const value: IAuthContextType = useMemo(
    () => ({
      auth,

      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
