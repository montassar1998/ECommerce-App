import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/navbar.module.css";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import CartContext from "../context/CartContext";

function Navbar() {
  const context = useContext(CartContext);
  return (
    <header className={classes.header}>
      <h3 className={classes.logo}>
        <Link to="/">Audio House</Link>
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="/products" className={classes.link}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/categories" className={classes.link}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.input}>
        <input type="text" placeholder="Search.." />
        <AiOutlineSearch size="1.7rem" className={classes.icon} />
      </div>
      <div className={classes.icons}>
        <div className={classes.signin}>
          <Link to="/signup">
            <AiOutlineUserAdd size="2.5rem" className={classes.iconItem} />
          </Link>
          <span>SIGNIN</span>
        </div>
        <div className={classes.cart}>
          <Link to="/cart">
            <AiOutlineShoppingCart size="2.5rem" className={classes.iconItem} />
            <span className={classes.cartTotal}>{context.cartItemsTotal}</span>
          </Link>
          <span>CART</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
