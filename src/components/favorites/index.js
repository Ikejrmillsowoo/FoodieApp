import React, { useState } from "react";
import "./style.css";
import Button from "reactstrap/lib/Button";
import { connect } from "react-redux";
import {
  fetchData,
  fetchFavorites,
  fetchUsers,
} from "../../redux/ActionCreators";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons";

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    favorites: state.favorites.favorites,
  };
};

const mapDispatchToProps = {
  fetchFavorites: () => fetchFavorites(),
};

function Favorite({ favBusiness }) {
  //console.log(favBusiness);
  const [favorites, setFavorites] = useState([]);

  const addToFave = () => {
    setFavorites(...favorites, favBusiness);
    console.log("fire");
  };
  //console.log(favorites);
  return (
    <div>
      <Button className="fave_button" color="secondary" onClick={addToFave}>
        add to favorites
      </Button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
