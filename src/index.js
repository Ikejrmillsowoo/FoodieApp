import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);
