import './Home.css';
// import '../../seeders/sounds.js';
import React, { Component } from "react";
import Delete from "../../components/Delete";
import API from "../../utl/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Howl } from 'howler';
import ReactHowler from 'react-howler';
// const db = require("../../../models/index.js");

class Sounds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds: [],
      playing: false,
      query: '',
    };
  }

  componentDidMount() {
    this.loadSounds();
    // this.pushSounds()
    //   .then(() =>  {
        console.log('component mounted');
      // })
      // .catch(error => console.error(error));
  }

  pushSounds = () => {
    // console.log('sanity check.. component mounted?');
    // return new Promise((resolve, reject) => {
    //     soundFreqFiles.insertMany([
    //       {
    //         'name': 'buzz',
    //         'file': '/sounds/bug-buzz.wav',
    //         'category': 'bug'
    //       },
    //       {
    //         'name': 'call',
    //         'file': '/sounds/bug-call.wav',
    //         'category': 'bug'
    //       }
    //     ]);
      // API.saveSound(seeders)
      //   .then(res => {
      //     console.log('db populated successfully');
      //   })
    // })
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

  deleteSound = id => {
    API.deleteSound(id)
      .then(res => this.loadSounds())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(1);
  //   if (this.state.query) {
  //     API.querySpotify(this.state.query)
  //       .then(res => this.loadSounds())
  //       .catch(err => console.log(err));
  //   }
  // };

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

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6 sm-12">
            {this.state.sounds.length ? (
              <List>
                {/* {this.state.sounds.map(sound => (
                  <ListItem key={sound._id}>
                    <Link to={"/sounds/" + sound._id}>
                      <strong>
                        {sound.name} is a {sound.description} sound category
                      </strong>
                    </Link>
                    <Delete onClick={() => this.deleteSound(sound._id)} />
                  </ListItem>
                ))} */}
                {this.state.sounds
                  .filter(sound => sound.description === this.props.soundCategory || this.props.soundCategory === 'all')
                  .map(sound => (
                  <div key={ sound._id }>
                    <button onClick={ () => this.handlePlay(sound.file) } > { `${sound.file}` }</button>
                  </div>

                ))}
              </List>
            ) : (
              <h3>Choose a sound category from the menu</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sounds;
