import React from "react";
import classes from "../styles/oneProduct.module.css";
function OneProduct({ oneProduct }) {
  return (
    <div className={classes.card}>
      <img src={oneProduct.img} className={classes.img} alt="head" />
      <p className={classes.title}>{oneProduct.title}</p>
      <h6 className={classes.price}>{oneProduct.price}</h6>
      <button className={classes.btn}>Add to Cart</button>
    </div>
  );
}

export default OneProduct;
