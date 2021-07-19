import React, { useEffect, useState } from "react";
import Results from "./results";

export default function NewData({ term, location, ...props }) {
  // const cors = "https://cors-anywhere.herokuapp.com/";
  // const YelpURL = "https://api.yelp.com/v3/businesses/search";
  const [data, setData] = useState({ isLoading: props.isLoading, data: [] });

  useEffect(() => {
    async function loadData() {
      const response = await fetch("http://localhost:8888");
      const dataResponse = await response.json();
      // console.log(dataResponse);
      setData({
        isLoading: false,
        data: dataResponse,
      });
    }
    console.log(data);
    loadData();
  }, []);

  return (
    <div>
      <Results data={data.data} isLoading={data.isLoading} />
    </div>
  );
}
