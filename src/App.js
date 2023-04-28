import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import ExampleBreadcrumb from "pages/ExampleBreadcrumb";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
        <Route exact path="/" component={LandingPage} />
        <Route path="/example" component={Example} />
        <Route path="/breadcrumb" component={ExampleBreadcrumb} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
