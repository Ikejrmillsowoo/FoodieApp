import React from "react";
import RenderCard from "../cardResults";
import { Loading } from "../isLoading";

export default function Results(props) {
  if (props.isLoading || !props.data) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <RenderCard businesses={props.data} />
      </div>
    );
  }
}
