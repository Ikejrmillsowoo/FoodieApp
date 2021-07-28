import React from "react";
import { Button } from "reactstrap";

function Login() {
  const onClick = () => {
    alert("Login under construction");
  };
  return (
    <div>
      <Button onClick={onClick} color="primary">
        Log In
      </Button>
    </div>
  );
}

export default Login;
