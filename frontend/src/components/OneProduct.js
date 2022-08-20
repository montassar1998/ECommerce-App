import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import classes from "../styles/oneProduct.module.css";
function OneProduct({ oneProduct }) {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...oneProduct },
    });
  };
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { ...oneProduct },
    });
  };

  return (
    <div className={classes.card}>
      <img src={oneProduct.img} className={classes.img} alt="head" />
      <p className={classes.title}>{oneProduct.title}</p>
      <h6 className={classes.price}>{oneProduct.price}</h6>
      {cart.some((p) => p.id === oneProduct.id) ? (
        <button className={classes.btn} onClick={removeFromCart}>
          REMOVE
        </button>
      ) : (
        <button className={classes.btn} onClick={addToCart}>
          ADD
        </button>
      )}
    </div>
  );
}

export default OneProduct;
