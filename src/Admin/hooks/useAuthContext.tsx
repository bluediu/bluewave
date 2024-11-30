import { useContext } from "react";

/* Context */
import { AuthContext } from "../context";

export const useAuthContext = () => useContext(AuthContext);
