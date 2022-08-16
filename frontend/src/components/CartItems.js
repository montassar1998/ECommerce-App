import React from "react";
import OneCartItem from "./OneCartItem";

function CartItems({ products, total, setTotal }) {
  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <OneCartItem
              item={item}
              total={total}
              setTotal={setTotal}
              key={item.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
