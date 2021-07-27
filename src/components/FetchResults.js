import React, { useEffect, useState } from "react";
import Results from "./results/index";

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
        ? fetch("http://localhost:8888")
        : fetch("http://localhost:8888", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSearchTerms),
          }));
      const dataResponse = await response.json();
      console.log(dataResponse);
      setData({
        isLoading: false,
        data: dataResponse,
      });
    }
    loadData();
  }, [props.term, props.location]);

  return (
    <div>
      <Results isLoading={data.isLoading} data={data.data} />
    </div>
  );
}
