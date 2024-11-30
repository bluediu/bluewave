import { useContext } from "react";

/* Context */
import { AuthTableContext } from "../context";

export const useTableContext = () => useContext(AuthTableContext);
