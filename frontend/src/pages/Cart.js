import React, { useContext, useState, useEffect } from "react";
import CartItems from "../components/CartItems";
import CartContext from "../context/CartContext";
import classes from "../styles/oneCartItem.module.css";

function Cart() {
  const context = useContext(CartContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(context.cartItems.reduce((acc, curr) => acc + curr.price, 0));
  }, []);

  let content;
  if (context.cartItemsTotal === 0) {
    content = <p>Cart is Empty</p>;
  } else {
    content = (
      <>
        <CartItems
          products={context.cartItems}
          key={context.cartItems.id}
          total={total}
          setTotal={setTotal}
        />
      </>
    );
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
