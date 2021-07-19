import "./App.css";
import React from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

//import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // const [response, setResponse] = useState("Before the call");
  // useEffect(() => {
  //   fetch("http://localhost:8888")
  //     .then((res) => res.text())
  //     .then((res) => {
  //       setResponse(res);
  //     });
  // });
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
