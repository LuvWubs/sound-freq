import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import '/App.css';
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";

// import date = new.Date(Date.now());
class App extends Component {

  state = {
    soundCategory: '',
  }

  handleUpdateSoundCategory = (soundCategory) => {
    console.log('soundCategory', soundCategory);
    this.setState({ soundCategory });
    // console.log('this.state from navbar: ', this.state);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar
              updateSoundCategory={this.handleUpdateSoundCategory}
            />
            <Switch>

              <Route exact path="/" render={()=><Home soundCategory={this.state.soundCategory} />}/>

              <Route exact path="/sounds/" component={Intro} />
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
  }
}

export default App;
