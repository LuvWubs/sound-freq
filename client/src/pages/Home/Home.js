import React, { Component } from "react";
import Delete from "../../components/Delete";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utl/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import './Home.css';

class Sounds extends Component {
  state = {
    sounds: [],
    name: "",
    file: "",
    description: ""
  };

  componentDidMount() {
    this.loadSounds();
  }

  loadSounds = () => {
    API.getSounds()
      .then(res =>
        this.setState({ sounds: res.data, name: "", file: "", description: "" })
      )
      .catch(err => console.log(err));
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

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
          </Col>


          <Col size="md-6 sm-12">
            {this.state.sounds.length ? (
              <List>
                {this.state.sounds.map(sound => (
                  <ListItem key={sound._id}>
                    <Link to={"/sounds/" + sound._id}>
                      <strong>
                        {sound.name} by {sound.description}
                      </strong>
                    </Link>
                    <Delete onClick={() => this.deleteSound(sound._id)} />
                  </ListItem>
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
