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
          <Route exact path="/" component={Home} />
          <Route exact path="/sounds" component={Intro} />
          {/* <Route exact path="/soundDeck" component={Deck} /> */}
          <Route path="/*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <footer>
      As Always, In Progress
    </footer>
  </div>
);

export default App;
