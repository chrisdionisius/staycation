import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import { ToastContainer } from "react-toastify";

import "assets/scss/style.scss";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/properties/:id" component={DetailsPage} />
          <Route path="/example" component={Example} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
