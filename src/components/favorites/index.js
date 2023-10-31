import React, { useState } from "react";
import "./style.css";
import Button from "reactstrap/lib/Button";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../sourceData";

const url = baseUrl;

function Favorite({ business }) {
  const data = useSelector((state) => state.data.data);
  const [favorites, setFavorites] = useState();
  const [responseData, setResponseData] = useState();
  const loggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  // console.log(favorites);
  const postToFave = async () => {
    //dispatch(dataLoading());
    if (favorites) {
      const response = await fetch(`${url}/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favorites),
      });

      const data = await response.json();
      setResponseData(data);
    }
  };

  // const addToFave = () => {
  //   if (loggedIn === false) {
  //     alert(`need to log in`);
  //   }
  //   setFavorites(business);
  //   dispatch(postToFave());
  //   //setFavorites(...favorites);
  //   // console.log(e);
  // };

  //console.log(favorites);
  return (
    <div className="fave_div">
      <i
        className="fa fa-heart fa-2x fave_button"
        onClick={() => alert(`need to log in`)}
      >
        <span className="tooltip_text">Add To Favorites</span>
      </i>

      {/* <Button  className="fave_button" color="secondary" onClick={addToFave}>
        add to favorites
      </Button> */}
    </div>
  );
}

export default Favorite;
