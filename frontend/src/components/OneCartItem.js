import React, { useContext } from "react";
import classes from "../styles/oneCartItem.module.css";
import { FiDelete } from "react-icons/fi";
import CartContext from "../context/CartContext";

function OneCartItem({ item }) {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  // const context = useContext(CartContext);
  // const checkItem = context.checkCartItem(item.id);
  // const [qte, setQte] = useState(item.qty);
  // console.log({ cart: qty });
  // const [itemPrice, setItemPrice] = useState(item.price);

  const changeQty = (e) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id: item.id,
        qty: e.target.value,
      },
    });
    console.log("target:", e.target.value);
  };

  // const addQuantity = async () => {
  //   setQte((prev) => prev + 1);
  //   await dispatch({
  //     type: "CHANGE_QTY",
  //     payload: { id: item.id, qty: qte },
  //   });
  // };
  // console.log(cart);

  // const subQuantity = () => {
  //   setQte((prev) => prev - 1);
  // setItemPrice((prev) => prev - item.price);
  // setTotal((prev) => prev - item.price);

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { ...item },
    });
  };

  return (
    <div className={classes.itemRow}>
      <img className={classes.img} src={item.img} />
      <h3>{item.title}</h3>
      <span>${item.price}</span>
      <div>
        {/* <button className={classes.plus} onClick={subQuantity}>
          -
        </button>
        <span>{item.qty}</span>
        <button className={classes.minus} onClick={addQuantity}>
          +
        </button> */}

        <select onChange={changeQty} value={item.qty}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
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
