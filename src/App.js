import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
// import Example from "pages/Example";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/properties/:id" component={DetailsPage} />
          {/* <Route path="/example" component={Example} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
