import { useContext } from "react";

/* Context */
import { CartContext } from "../context";

export const useCartContext = () => useContext(CartContext);
