import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataLoading, dataReceived } from "../redux/dataSlice";
// import { userLoggedIn } from "../redux/loginSlice";
import Results from "./results";
import { baseUrl } from "./sourceData";
const url = baseUrl;
const apiKey = process.env.API_KEY;
function FetchResults(props) {
  const { term, location } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const searchItems = {
      term: term,
      location: location,
    };
    //console.log(process.env.API_KEY);

    const fetchData = () => async () => {
      dispatch(dataLoading());
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(searchItems),
      });

      const data = await response.json();
      console.log(data);
      dispatch(dataReceived(data));
    };
    dispatch(fetchData());
  }, [dispatch, location, term]);

  return (
    <div>
      <Results />{" "}
    </div>
  );
}

export default FetchResults;
