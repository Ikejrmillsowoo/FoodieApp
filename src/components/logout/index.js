import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { userLoggedOut } from "../../redux/loginSlice";
import { Link } from "react-router-dom";

function Logout({ getFavorites }) {
  console.log(getFavorites());
  const userInfo = useSelector((state) => state.login.loggedUser);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        className="logoutButton"
        color="secondary"
        onClick={() => dispatch(userLoggedOut(false))}
      >
        <p className="userImage">{userInfo}</p>
        Logout
      </Button>
      <Link to="/faveRenders" onClick={() => getFavorites()}>
        Favorites
      </Link>
      {/* <Button
        className="favorites_list"
        color="danger"
        onClick={() => dispatch(getFavorites())}
      >
        Favorites
      </Button> */}
    </div>
  );
}

export default Logout;
