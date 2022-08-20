import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import classes from "../styles/login.module.css";

function Login() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const submitLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    await axios
      .post("http://localhost:5000/auth/login", user)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          //add user to local storage
          localStorage.setItem("user", JSON.stringify(response.data));
          // update the auth context
          dispatch({ type: "LOGIN", payload: response.data });

          navigate("/", { replace: true });
        }
      })
      .catch(function (error) {
        setError(error.response.data.error);
      });
  };
  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitLogin}>
          <h2>Login</h2>
          <div className={classes.username}>
            <AiOutlineUserAdd className={classes.icons} size={30} />
            <input type="text" placeholder="Username.." ref={usernameRef} />
          </div>
          <div className={classes.password}>
            <Si1Password className={classes.icons} size={30} />
            <input type="password" placeholder="Password.." ref={passwordRef} />
          </div>
          <div>
            <button className={classes.loginBtn}>Log In</button>
          </div>
          <p className={classes.forgot}>Forgot Password?</p>
          <div>{error && <div className={classes.error}>{error}!</div>}</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
