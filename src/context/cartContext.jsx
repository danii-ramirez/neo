import { createContext, useState } from "react";

export const CartContext = createContext();

const cartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = () => {};

  const deleteCart = () => {};

  const clearCart = () => {};

  return (
    <CartContext.Provider value={{ cart, addCart, deleteCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default cartContext;
