import React, { useContext, useState, useEffect } from "react";
import CartItems from "../components/CartItems";
import CartContext from "../context/CartContext";
import classes from "../styles/oneCartItem.module.css";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  let content;
  if (cart.length === 0) {
    content = <p>Cart Empty</p>;
  } else {
    content = <CartItems products={cart} />;
  }
  return (
    <div className={classes.cartContainer}>
      <div>{content}</div>
      <div className={classes.totalBtn}>
        <button className={classes.buyBtn}>Buy</button>
        <span>Total: ${total} </span>
      </div>
      {/* {context.cartItemsTotal} */}

      {/* <span>Total: {totalPrice}</span> */}
    </div>
  );
}

export default Cart;
