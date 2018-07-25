import './Home.css';
import React, { Component } from "react";
import API from "../../utl/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Delete } from '../../components/Delete';
import { List, ListItem } from "../../components/List";
import { FormBtn } from "../../components/Form";
import { Howl } from 'howler';
// import ReactHowler from 'react-howler';

class Sounds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds: [],
      playing: false,
      query: '',
      soundCategory: ''
    };
  }

  componentDidMount() {
    this.loadSounds()
    .catch(error => console.error(error));
  }

  loadSounds = () => {
    return new Promise((resolve, reject) => {
      API.getSounds()
        .then(resolve => {
          console.log('getSounds res', resolve);
          this.setState({ sounds: resolve.data});
          // resolve();
        })
        .catch(err => reject(err));
        console.log('this.state: ', this.state);
    })
  };
  //
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
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
    });
    sound.play();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6 sm-12">
            {this.state.sounds.length ? (
              <List>
                {this.state.sounds.map(sound => (
                  <ListItem key={sound._id}>
                    <Link to={"/sounds/" + sound._id}>
                      <strong>
                        {sound.name} is a {sound.description} sound category
                      </strong>
                    </Link>
                    <Delete onClick={() => this.deleteSound(sound._id)} />
                  </ListItem>
                ))}
                <FormBtn>
                {this.state.sounds
                    .filter(sound => sound.soundCategory === this.props.soundCategory || this.props.soundCategory === 'all')
                    .map(sound => (
                      <div key={ sound._id }>
                        <button onClick={ () => this.handlePlay(sound.file) } > { `${sound.file}` }</button>
                      </div>
                    ))
                  }

                </FormBtn>
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
