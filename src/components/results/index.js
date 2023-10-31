import React from "react";
import RenderCard from "../cardResults";
import { Loading } from "../isLoading";
import { useSelector } from "react-redux";

export default function Results() {
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);

  if (loading || !data) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <RenderCard />
      </div>
    );
  }
}
