import React, { useEffect, useState } from "react";
import Results from "./results/index";

export default function NewData(props) {
  // const cors = "https://cors-anywhere.herokuapp.com/";
  // const YelpURL = "https://api.yelp.com/v3/businesses/search";
  const [data, setData] = useState({
    isLoading: true,
    data: "",
  });

  useEffect(() => {
    async function loadData() {
      const response = await fetch("http://localhost:8888");
      const dataResponse = await response.json();
      setData({
        isLoading: false,
        data: dataResponse,
      });
    }
    //console.log(data);
    loadData();
  }, []);

  return (
    <div>
      <Results
        startData={data.data}
        isLoading={data.isLoading}
        data={props.data}
      />
    </div>
  );
}
