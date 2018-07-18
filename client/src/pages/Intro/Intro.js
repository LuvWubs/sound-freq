    import React, { Component } from "react";
    import axios from 'axios';
    import { Link } from "react-router-dom";
    import { Col, Row, Container } from "../../components/Grid";
    // import API from "../../utl/API";
    

    class Intro extends Component {
      state = {
        sound: {}
      };

      componentDidMount() {
        console.log('post to /api/sounds in Intro');

        // API.getSound(this.props.match.params.id)
        //   .then(res => this.setState({ sound: res.data }))
        //   .catch(err => console.log(err));
      }

      render() {
        return (

          <Container fluid>
            <Row>
              <h1>Say hello in a new way by typing 'hello'!</h1>
            </Row>


              <Link to="/">Click this to go home</Link>
             {/* <Row id="hello" hidden="true">
               <h1 id='h' class='hello'>H</h1>
               <h1 id='e' class='hello'>E</h1>
               <h1 id='l' class='hello'>L</h1>
               <h1 id='ll' class='hello'>L</h1>
               <h1 id='o' class='hello'>O!</h1>
             </Row> */}
             {/* <div id="howTo" hidden="true"> */}
               <h1>Say hello in a new way by typing 'hello'!</h1>
             {/* </div>
             <div id="goPlay" hidden="true">
               Now that you know how to interact with the sound database, choose any themes listed in the menu and go play!
             </div> */}

              {/* <Col size="md-12">
                {this.state.sound.description}
              </Col>
            </Row>
            <Row>
              <Col size="md-10 md-offset-1">
                <div>
                  <p>
                    {this.state.sound.file}
                    is this werking??
                  </p>

                </div>
                <button
                  className="btn btn-info"
                >
                  Get Sounds!
                </button>
              </Col> */}
            {/* </Row> */}
          </Container>
        );
      }
    }

    export default Intro;
