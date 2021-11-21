import React, { useEffect, useState } from "react";
import { baseUrl } from "./sourceData";
import Results from "./results/index";

const url = baseUrl;
export default function NewData(props) {
  const [data, setData] = useState({
    isLoading: true,
    data: null,
    signup: null,
  });

  const signupData = {
    firstname: props.firstname,
    lastname: props.lastname,
    username: props.username,
    password: props.password,
  };

  console.log(signupData);

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

  useEffect(() => {
    async function postUser() {
      const response = await fetch(`${url}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      const dataResponse = await response.json();
      console.log(dataResponse);
      dataResponse
        ? alert(`Signed up as: ${dataResponse.username}`)
        : alert(`Signup failed, please sign in again`);
      // setData({
      //   signup: dataResponse,
      // });
    }
    postUser();
  }, [
    signupData.firstname,
    signupData.lastname,
    signupData.username,
    signupData.password,
  ]);

  // useEffect(() => {
  //   async function getFavorites() {
  //     const response = await fetch(`${url}?favorites`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(signupData),
  //     });
  //     const dataResponse = await response.json();

  //     setData({
  //       signup: dataResponse,
  //     });
  //   }
  //   getFavorites();
  // }, []);

  return (
    <div>
      <Results isLoading={data.isLoading} data={data.data} />
    </div>
  );
}
