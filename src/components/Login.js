import React from "react";
import { Button } from "@material-ui/core";
import { provider, auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => err.message);
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/306_Slack-512.png"
          alt="slack logo"
        />
        <h1>Sign in to Ijaz Ahamed's Slack</h1>
        <p>ijazahamed.slack.com</p>
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
