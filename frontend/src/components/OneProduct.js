import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import classes from "../styles/oneProduct.module.css";
function OneProduct({ oneProduct }) {
  const context = useContext(CartContext);
  const checkItem = context.checkCartItem(oneProduct.id);

  const handleCartButton = () => {
    if (checkItem) {
      context.removeFromCart(oneProduct.id);
    } else {
      context.addToCart(oneProduct);
    }
  };

  return (
    <div className={classes.card}>
      <img src={oneProduct.img} className={classes.img} alt="head" />
      <p className={classes.title}>{oneProduct.title}</p>
      <h6 className={classes.price}>{oneProduct.price}</h6>
      <button className={classes.btn} onClick={handleCartButton}>
        {checkItem ? "Remove From Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default OneProduct;
