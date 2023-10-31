import React from "react";
import SearchItems from "../searchItems";

import { useSelector } from "react-redux";
import FetchResults from "../FetchResults";
import { Route, Switch } from "react-router-dom";
import FaveRenders from "../faveRender";

function Main() {
  const term = useSelector((state) => state.search.term);
  const location = useSelector((state) => state.search.location);

  return (
    <Switch>
      <div
        className="main_page"
        style={{
          backgroundImage: 'url("/assets/images/background.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SearchItems />
        <FetchResults term={term} location={location} />
        <Route path="/faveRenders">
          <FaveRenders />
        </Route>
      </div>
    </Switch>
  );
}
export default Main;
