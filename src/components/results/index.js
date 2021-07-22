import React, { useEffect, useState } from "react";
import RenderCard from "../cardResults";
import { Loading } from "../isLoading";

export default function Results(props) {
  console.log(props);
  const [move, setMove] = useState(props.startData);

  useEffect(() => {
    function newData() {
      setMove(props.data);
      console.log(move);
    }
    newData();
  }, [move]);

  console.log(move);
  if (props.isLoading || !move) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <RenderCard businesses={move} />
      </div>
    );
  }
}
