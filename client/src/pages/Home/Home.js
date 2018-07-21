import React, { Component } from "react";
import Delete from "../../components/Delete";
import API from "../../utl/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Howl } from 'howler';
import ReactHowler from 'react-howler';
import './Home.css';

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
    this.loadSounds()
      // .then(() =>  {
        // console.log('LOAD OF SOUNDS SUCCESSFUL', this.randomSound);
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
          console.log('getSounds res', res);
          // create an object with key of category with value as array of sounds
          /*
            {
              bug: ['/sounds/bug-clicks.wav', '/sounds/bug-flying.wav', ...],
              drops: ['/sounds/drops-explosion.wav', '/sounds/drops-boom.wav', ...],
            }
          */
          /*
            this.state.category = 'bug';
            {
              this.state.sounds.filter((sound) => {
              return sound.description === this.state.category;
            })
          }
          */

          this.setState({ sounds: res.data})
          // this.setState is asynchronous so you can't do below:
          //console.log('setState: ', this.state);
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
    // console.log('typed letter: ', event.target);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(1);
    if (this.state.query) {
      API.querySpotify(this.state.query)
        .then(res => this.loadSounds())
        .catch(err => console.log(err));
    }
  };

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
    // this.setState({ playing: true });
    // setState({ sounds: event.target.category })
  }

  render() {
    // console.log('Home props', this.props);
    return (
      <Container>
        <Row>
          <Col size="md-6">

            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Search Spotify..."
              />
              {/*<Input
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
              />*/}
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                Get Songs
              </FormBtn>
            </form>
          </Col>


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
                    {/* <button > { `${sound.file}` }</button> */}
                    {/*<ReactHowler
                      src={[`${sound.file}`]}
                      // html5={true}
                      // preload={true}
                      playing={true}
                      // ref={(ref) => (this.player = ref)}
                    />*/}
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
