import React, { createContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

const initialState = { cart: [], total: 0 };

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
