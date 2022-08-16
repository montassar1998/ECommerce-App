import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import classes from "../styles/oneCartItem.module.css";
import { FiDelete } from "react-icons/fi";

function OneCartItem({ item, total, setTotal }) {
  const context = useContext(CartContext);
  const checkItem = context.checkCartItem(item.id);
  const [qte, setQte] = useState(1);
  const [itemPrice, setItemPrice] = useState(item.price);

  const addQuantity = () => {
    setQte((prev) => prev + 1);
    setItemPrice((prev) => prev + item.price);
    setTotal((prev) => prev + item.price);
  };

  const subQuantity = () => {
    if (qte > 1 && total > 0) {
      setQte((prev) => prev - 1);
      setItemPrice((prev) => prev - item.price);
      setTotal((prev) => prev - item.price);
    }
  };

  const handleRemove = () => {
    if (checkItem) {
      context.removeFromCart(item.id);
    }
  };

  return (
    <div className={classes.itemRow}>
      <img className={classes.img} src={item.img} />
      <h3>{item.title}</h3>
      <span>${itemPrice}</span>
      <div>
        <button className={classes.plus} onClick={subQuantity}>
          -
        </button>
        <span>{qte}</span>
        <button className={classes.minus} onClick={addQuantity}>
          +
        </button>
      </div>
      <FiDelete
        className={classes.deleteIcon}
        onClick={handleRemove}
        size={30}
      />
    </div>
  );
}

export default OneCartItem;
