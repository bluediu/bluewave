import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { TOKEN } from "../constants";
import { fn } from "../utils";

interface IAuthContextType {
  isAuthenticated: boolean;
  userId: number | null;
  handleAuthUser: ({ userAuthId }: { userAuthId: number }) => void;
  logoutAuthUser: () => void;
}

export const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  userId: null,
  handleAuthUser() {},
  logoutAuthUser() {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const AuthProvider: TProviderChildren = ({ children }) => {
  const token: string | null = localStorage.getItem(TOKEN);

  const [isAuthenticated, setAuthenticated] = useState<boolean>(!!token);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    try {
      if (token) {
        const decodedToken = fn.decodeToken(token);
        const expirationTime: number = decodedToken.exp! * 1000;

        if (Date.now() >= expirationTime) {
          logoutAuthUser();
          toast.error("Session Expired: Please log in again.");
        } else {
          handleAuthUser({ userAuthId: decodedToken.user_id });
        }
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      // Treat invalid token as expired, logout the user
      logoutAuthUser();
    }
  }, [token]);

  const handleAuthUser = ({ userAuthId }: { userAuthId: number }) => {
    setUserId(userAuthId);
    setAuthenticated(true);
  };

  const logoutAuthUser = () => {
    setUserId(null);
    setAuthenticated(false);

    localStorage.removeItem(TOKEN);
  };

  const value: IAuthContextType = {
    isAuthenticated,
    userId,
    handleAuthUser,
    logoutAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
