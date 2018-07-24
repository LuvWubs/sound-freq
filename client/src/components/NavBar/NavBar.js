import React, { Component } from "react";
import API from "../../utl/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Howl } from 'howler';
import { Input, TextArea, FormBtn } from "../../components/Form";
import './NavBar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sounds: [],
      playing: false,
      query: '',
      songFile: ''
    };
  }

  loadSounds = () => {
    return new Promise((resolve, reject) => {
      API.getSounds()
        .then(res => {
          console.log('getSounds res', res);
          this.setState({ sounds: res.data})
          resolve();
        })
        .catch(err => reject(err));
    })
  };
  //
  // addSong = songFile => {
  //   // console.log('add this from Spotify!');
  //   // this.setState({ songFile })
  //   console.log('this.state after spotify addition: ', this.state);
  //   this.state.songFile
  //     // .filter(sound => sound.description === this.props.soundCategory || this.props.soundCategory === 'all')
  //     .map(sound => (
  //     <div key={ sound._id }>
  //       <button onClick={ () => this.handlePlay(songFile) } > { `${sound.file}` }</button>
  //     </div>
  //   ))
  // }

  handlePlay(soundUrl) {
    console.log('soundUrl:', soundUrl);
    var sound = new Howl({
      src: [soundUrl],
      playing: true
      //   autoplay: false,
      //   loop: false,
      //   volume: 0.5,
    });
    sound.play();
    console.log('done howling');
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(1, this.state.query);
    if (this.state.query) {
      API.querySpotify(this.state.query)
        // .then(res => this.state.songFile)
        .then(res => this.setState( {songFile: res} ))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <nav>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <Link className="navbar-brand" to="/">SoundFreq</Link>
          <div className="navbar-header pull-right">
            <a id="nav-expander" className="nav-expander fixed">
              MENU &nbsp;<i className="fa fa-bars fa-lg white"></i>
            </a>
          </div>
        </div>
        <div style={{ marginTop: '30px' }}>
        <ul className="list-unstyled main-menu">
          <li className="text-right"><div id="nav-close">[close]</div></li>

          <li>
            <form id="form-group" method="GET">Audio Themes
              <ul className="list-soundThemes">
                <li className="sound-nav">
                  <a href="#" className="list" id="bug" onClick={() => this.props.updateSoundCategory('bug')}>
                    Bugs<span className="icon"></span>
                  </a>
                </li>
                <li className="sound-nav">
                  <a href="#" className="list" id="drops" onClick={() => this.props.updateSoundCategory('drops')}>
                    Drops<span className="icon"></span>
                  </a>
                </li>
                <li className="sound-nav">
                  <a href="#" className="list" id="electronics" onClick={() => this.props.updateSoundCategory('electronics')}>
                    Electronics<span className="icon"></span>
                  </a>
                </li>
                <li className="sound-nav">
                  <a href="#" className="list" id="noise" onClick={() => this.props.updateSoundCategory('noise')}>
                    Noises<span className="icon"></span>
                  </a></li>
                <li className="sound-nav">
                  <a href="#" className="list" id="all" onClick={() => this.props.updateSoundCategory('all')}>
                    All Themes<span className="icon"></span>
                  </a>
                </li>
              </ul>
            </form>
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Search Spotify..."
              />
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
                //NOTE must setState w/ queried song
                // onClick={() => this.state.addSong('query')}
              >
                Get Songs
              </FormBtn>
            </form>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
