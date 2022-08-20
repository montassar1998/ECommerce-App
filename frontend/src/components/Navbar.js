import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/navbar.module.css";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
} from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";

import CartContext from "../context/CartContext";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [spinner, setSpinner] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();

  const handleLogout = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
    return logout();
  };
  if (spinner) {
    return (
      <ClipLoader className={classes.spinner} loading={spinner} size={35} />
    );
  }
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

      <div className={classes.icons}>
        {/* LOGOUT */}

        {user ? (
          <>
            <span className={classes.username}>{user.username}</span>
            <div className={classes.signin}>
              <Link to="/">
                <AiOutlineUserDelete
                  onClick={handleLogout}
                  size="2.5rem"
                  className={classes.iconItem}
                />
              </Link>
              <span>LOGOUT</span>
            </div>
          </>
        ) : (
          <div className={classes.signin}>
            <Link to="/signup">
              <AiOutlineUserAdd size="2.5rem" className={classes.iconItem} />
            </Link>
            <span>SIGNUP</span>
          </div>
        )}

        <div className={classes.cart}>
          <Link to="/cart">
            <AiOutlineShoppingCart size="2.5rem" className={classes.iconItem} />

            {state.cart.length > 0 && (
              <span className={classes.cartTotal}>{state.cart.length}</span>
            )}
          </Link>
          <span>CART</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
