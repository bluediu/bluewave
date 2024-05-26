import { createContext, useEffect, useState } from "react";

/* Hooks */
import { toast } from "react-toastify";

/* Utils */
import { fn } from "../utils";

/* Constants */
import { TOKEN } from "../constants";

interface IAuthProps {
  userAuthId: number;
  superuser: boolean;
}

interface IAuthContextType {
  isAuthenticated: boolean;
  isSuperuser: boolean;
  userId: number;
  handleAuthUser: ({ userAuthId }: IAuthProps) => void;
  logoutAuthUser: () => void;
}

export const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  isSuperuser: false,
  userId: 0,
  handleAuthUser() {},
  logoutAuthUser() {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const AuthProvider: TProviderChildren = ({ children }) => {
  const token: string | null = localStorage.getItem(TOKEN);

  const [isAuthenticated, setAuthenticated] = useState<boolean>(!!token);
  const [isSuperuser, setIsSuperuser] = useState(false);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    try {
      if (token) {
        const decodedToken = fn.decodeToken(token);
        const expirationTime: number = decodedToken.exp! * 1000;

        if (Date.now() >= expirationTime) {
          logoutAuthUser();
          toast.error("Session Expired: Please log in again.");
        } else {
          handleAuthUser({
            userAuthId: decodedToken.user_id,
            superuser: decodedToken.superuser,
          });
        }
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      // Treat invalid token as expired, logout the user
      logoutAuthUser();
    }
  }, [token]);

  const handleAuthUser = async ({ userAuthId, superuser }: IAuthProps) => {
    setUserId(userAuthId);
    setAuthenticated(true);
    setIsSuperuser(superuser);
  };

  const logoutAuthUser = () => {
    setUserId(0);
    setAuthenticated(false);

    localStorage.removeItem(TOKEN);
  };

  const value: IAuthContextType = {
    isAuthenticated,
    isSuperuser,
    userId,
    handleAuthUser,
    logoutAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
