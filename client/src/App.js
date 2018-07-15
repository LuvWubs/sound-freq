import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import '/App.css';
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";

// import date = new.Date(Date.now());
const App = () => (

  <div>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/sounds" component={Home} />
          <Route path="/sounds/:id" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <footer>
      As Always, In Progress
    </footer>
  </div>
);

export default App;
