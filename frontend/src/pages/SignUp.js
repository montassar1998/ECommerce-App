import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineMail } from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import classes from "../styles/signup.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitSignUp = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return alert("Password doesn't match");
    } else {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      await axios
        .post("http://localhost:5000/auth/signup", user)
        .then((response) => {
          console.log(response.data);
          navigate("/", { replace: true });
        });
    }
  };

  return (
    <div className={classes.signup}>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={submitSignUp}>
          <h2>Sign Up</h2>
          <div className={classes.username}>
            <AiOutlineUserAdd className={classes.icons} size={30} />
            <input
              type="text"
              placeholder="Username.."
              ref={usernameRef}
              required
            />
          </div>
          <div className={classes.email}>
            <AiOutlineMail className={classes.icons} size={30} />
            <input type="text" placeholder="Email.." ref={emailRef} required />
          </div>
          <div className={classes.password}>
            <Si1Password className={classes.icons} size={30} />
            <input
              type="password"
              placeholder="Password.."
              ref={passwordRef}
              required
            />
          </div>
          <div className={classes.password}>
            <Si1Password className={classes.icons} size={30} />
            <input
              type="password"
              placeholder="Confirm Password.."
              ref={confirmPasswordRef}
              required
            />
          </div>
          <div>
            <button className={classes.signupBtn}>Sign Up</button>
            <p className={classes.login}>
              Already have an account?{" "}
              <span>
                <Link to="/login">"LOGIN"</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
