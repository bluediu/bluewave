import React, { createContext, useEffect, useState } from "react";

/* Interfaces */
import { ICartProduct } from "../interfaces";

/* Constants */
import { PRODUCTS_CART } from "../constants";

interface ICartContextType {
  count: number;
  products: ICartProduct[];
  addToCart: (product: ICartProduct) => void;
  updateQtyFromCart: (productId: number, newQty: number) => void;
  removeFromCart: (productId: number) => void;
  removeAllFromCart: () => void;
}

export const CartContext = createContext<ICartContextType>({
  count: 0,
  products: [],
  addToCart() {},
  removeFromCart() {},
  updateQtyFromCart() {},
  removeAllFromCart() {},
});

type IProviderChildren = React.FC<{ children: React.ReactNode }>;
export const CartProvider: IProviderChildren = ({ children }) => {
  const data = JSON.parse(localStorage.getItem(PRODUCTS_CART) ?? "[]");
  const [products, setProducts] = useState<ICartProduct[]>(data);
  const [count, setCount] = useState(products.length);

  useEffect(() => {
    setCount(products.length);
  }, [products]);

  const saveInLS = (item: ICartProduct[]) => {
    localStorage.setItem(PRODUCTS_CART, JSON.stringify(item));
  };

  const addToCart = (product: ICartProduct) => {
    setProducts((prevCart) => {
      const updatedCart = [product, ...prevCart];
      saveInLS(updatedCart);
      return updatedCart;
    });
  };

  const updateQtyFromCart = (productId: number, newQty: number) => {
    setProducts((prevCart) => {
      const updatedCart = prevCart.map((product) =>
        product.id === productId ? { ...product, productQty: newQty } : product,
      );
      // Update local storage
      saveInLS(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setProducts((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => product.id !== productId,
      );
      saveInLS(updatedCart);
      return updatedCart;
    });
  };

  const removeAllFromCart = () => {
    localStorage.removeItem(PRODUCTS_CART);
    setProducts([]);
  };

  const value = {
    count,
    products,
    addToCart,
    updateQtyFromCart,
    removeFromCart,
    removeAllFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
