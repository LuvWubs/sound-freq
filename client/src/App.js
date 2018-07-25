import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Footer } from 'react-materialize';
// import Intro from "./pages/Intro";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
// import Deck from "./components/soundDeck";

class App extends Component {

  state = {
    sounds: [],
    playing: false,
    query: '',
    soundCategory: '',
    songFile: ''
  }

  handleUpdateSoundCategory = (soundCategory) => {
    console.log('soundCategory', soundCategory);
    this.setState({ soundCategory });
  }

  // addSong = (songFile) => {
  //   console.log('add this songFile from Spotify!', songFile);
  //   this.setState({ songFile });
  //   console.log('this.state: ', this.state);
  // }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar
              updateSoundCategory={this.handleUpdateSoundCategory}
              // addSong={this.addSong}
            />
            <Switch>
              <Route exact path="/" render={()=><Home soundCategory={this.state.soundCategory} /> } />
              <Route path="/*" component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
