import React, { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  cartItemsTotal: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  checkCartItem: (id) => {},
  // totalPrice: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState();

  function addToCart(item) {
    setCartItems((prev) => {
      return prev.concat(item);
    });
  }
  function removeFromCart(id) {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  function checkCartItem(id) {
    return cartItems.some((item) => item.id === id);
  }

  


  const context = {
    cartItems: cartItems,
    cartItemsTotal: cartItems.length,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    checkCartItem: checkCartItem,
    // totalPrice: totalPrice,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

export default CartContext;
