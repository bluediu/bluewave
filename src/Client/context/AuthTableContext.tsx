import { createContext, useEffect, useState } from "react";

/* Libs */
import { toast } from "react-toastify";

/* Constants */
import { TOKEN } from "../constants";

/* Utils */
import { fn } from "../../utils";

interface IAuthTableContextType {
  isAuthenticated: boolean;
  code: string;
  login: (code: string) => void;
  logout: () => void;
}

export const AuthTableContext = createContext<IAuthTableContextType>({
  isAuthenticated: false,
  code: "",
  login() {},
  logout() {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const AuthTableProvider: TProviderChildren = ({ children }) => {
  const token: string | null = localStorage.getItem(TOKEN);

  const [isAuthenticated, setAuthenticated] = useState<boolean>(!!token);
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    try {
      if (token) {
        const decodedToken = fn.decodeClientToken(token);
        const expirationTime: number = decodedToken.exp! * 1000;

        if (Date.now() >= expirationTime) {
          logout();
          toast.error("Session Expired: Please log in again.");
        } else {
          login(decodedToken.code);
        }
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      // Treat invalid token as expired & logout.
      logout();
    }
  }, [token]);

  const login = async (code: string) => {
    setAuthenticated(true);
    setCode(code);
  };

  const logout = () => {
    setCode("");
    setAuthenticated(false);
    localStorage.removeItem(TOKEN);
  };

  const value: IAuthTableContextType = {
    isAuthenticated,
    code,
    login,
    logout,
  };

  return (
    <AuthTableContext.Provider value={value}>
      {children}
    </AuthTableContext.Provider>
  );
};
