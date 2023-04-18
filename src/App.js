import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
        <Route path="/" component={LandingPage}></Route>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
