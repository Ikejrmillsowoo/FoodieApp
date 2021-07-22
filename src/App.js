import "./App.css";
import React from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

//import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      {/* {response} */}
    </div>
  );
}

export default App;
