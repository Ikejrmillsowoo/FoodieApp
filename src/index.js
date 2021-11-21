import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//import { createStore } from "redux";
import "./index.css";
import App from "./App";
//import { Provider, connect } from "react-redux";

// const userInfo = {
//   firstname: "",
//   lastname: "",
//   username: "",
//   password: "",
// };

// const userDataReducer = function (state = 0, action) {
//   switch (action.type) {
//     case "INCREASE":
//       return state + 1;
//     default:
//       return state;
//   }
// };

// const mapStateToProps = (state) => {
//   return {
//     count: state,
//   };
// };

// let store = createStore(userDataReducer);
// const Component = ({ count }) => <h1>let see how this goes {count}</h1>;

// const Container = connect(mapStateToProps)(Component);

// const App = () => {
//   <Provider store={store}>
//     <Container />
//   </Provider>;
// };

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
