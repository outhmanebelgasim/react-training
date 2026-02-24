import React from "react";

function IfElseRendring({ name = "Guest" }) {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <h1>Welcome Back {name}, You are logged in !</h1>;
  } else {
    return <h1>Please Login First !</h1>;
  }
}

export default IfElseRendring;
