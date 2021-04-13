import React, { useEffect, useState } from "react";
import Results from "./results";
import { apiKey } from "./sourceData";

export default function NewData({ term, location, ...props }) {
  const cors = "https://cors-anywhere.herokuapp.com/";
  const YelpURL = "https://api.yelp.com/v3/businesses/search";
  const [data, setData] = useState({ isLoading: props.isLoading, data: [] });

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `${cors}${YelpURL}?term=${term}&location=${location}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const dataResponse = await response.json();
      console.log(dataResponse);
      setData({
        isLoading: false,
        data: dataResponse.businesses,
      });
    }
    loadData();
  }, [term, location]);

  return (
    <div>
      <Results data={data.data} isLoading={data.isLoading} />
    </div>
  );
}
