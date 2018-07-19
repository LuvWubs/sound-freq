import React, { Component } from "react";
import Delete from "../../components/Delete";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utl/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

import ReactHowler from 'react-howler';

// import { Input, TextArea, FormBtn } from "../../components/Form";
import './Home.css';

class Sounds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds: [],
      // name: "",
      // file: "",
      // description: "",
      playing: false
    };
  }

  componentDidMount() {
    this.loadSounds()
      // .then(() =>  {
      //   console.log('LOAD OF SOUNDS SUCCESSFUL', this.randomSound);
      //   window.addEventListener('keydown', this.randomSound);
      // })
      .catch(error => console.error(error));
  }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.randomSound);
  // }

  // randomSound = (sounds) => {
  //   console.log(this.state.sounds[Math.floor(Math.random() * this.state.sounds.length)]);
  //   const file = this.state.sounds[Math.floor(Math.random() * this.state.sounds.length)].file;
  //   console.log(`../../audio${file}`);
  //   // const sound = new Howl({ src: [`../../audio${file}`]});
  //   // sound.play();
  //   return file;
  // }

  loadSounds = () => {
    return new Promise((resolve, reject) => {
      API.getSounds()
        .then(res => {
          this.setState({ sounds: res.data, name: "", file: "", description: "" })
          console.log('setState: ', this.state);
          resolve();
        })
        .catch(err => reject(err));
    })
  };

  // API.getSound(this.props.match.params.id)
  //   .then(res => this.setState({ sound: res.data }))
  //   .catch(err => console.log(err));

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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name || this.state.description) {
      API.saveSound({
        name: this.state.name,
        file: this.state.file,
        description: this.state.description
      })
        .then(res => this.loadSounds())
        .catch(err => console.log(err));
    }
  };

  handlePlay(e) {
    console.log('eeeevent:', e);
    var sound = new Howl({
      src: [e.file]
      //   autoplay: false,
      //   loop: false,
      //   volume: 0.5,
    })
    sound.play();

    // this.setState({ playing: true });
    this.state.play();
  }

  render() {
    return (
      <Container>
        <Row>
          {/* <Col size="md-6">

            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name"
              />
              <Input
                value={this.state.file}
                onChange={this.handleInputChange}
                name="file"
                placeholder="File"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description"
              />
              <FormBtn
                disabled={!(this.state.file && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Get Songs
              </FormBtn>
            </form>
          </Col> */}


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
                {this.state.sounds.map(sound => (
                  <div key={ sound._id }>
                    <ReactHowler
                      src={[`../../public/audio${sound.file}`]}
                      html5={true}
                      // preload={true}
                      playing={this.state.playing}
                    />
                    <button onClick={ () => this.handlePlay(sound) } > { `${sound.file}` }</button>
                  </div>

                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sounds;
