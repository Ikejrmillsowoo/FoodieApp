import React from "react";
import { Button } from "reactstrap";

export default function Submit(props) {
  return (
    <div>
      <Button onClick={props.onClick}>Submit</Button>
    </div>
  );
}
