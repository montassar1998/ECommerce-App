import React from "react";
import OneProduct from "./OneProduct";
import classes from "../styles/productList.module.css";
function ProductsList({ products }) {
  return (
    <div className={classes.productList}>
      {products.map((product) => {
        return (
          <>
            <OneProduct oneProduct={product} />
          </>
        );
      })}
    </div>
  );
}

export default ProductsList;
