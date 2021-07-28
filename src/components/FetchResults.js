import React, { useEffect, useState } from "react";
import Results from "./results/index";

const url = "https://enigmatic-brook-83236.herokuapp.com/";
export default function NewData(props) {
  const [data, setData] = useState({
    isLoading: true,
    data: null,
  });

  const newSearchTerms = {
    term: props.term,
    location: props.location,
  };

  useEffect(() => {
    async function loadData() {
      const response = await (!data.data
        ? fetch(url)
        : fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSearchTerms),
          }));
      const dataResponse = await response.json();
      setData({
        isLoading: false,
        data: dataResponse,
      });
    }
    loadData();
  }, [newSearchTerms.term, newSearchTerms.location]);

  return (
    <div>
      <Results isLoading={data.isLoading} data={data.data} />
    </div>
  );
}
