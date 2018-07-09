import React, { Component } from "react";
import Nav from "./components/Nav";
import Wrapper from "./components/Wra";
import Presets from "./components/Presets";
import Tables from "./components/Tables";
import presets from "./seeds.json";
import ReactHowler from 'react-howler';

const App = () =>

// render() {
//   return (
    <Wrapper>
      <Nav />
      {this.state.presets.map(preset => (
        <Presets
          key={presets.name}
          name={presets.name}
          file={presets.file}
          description={presets.description}
          newSong={this.newSong}
        />
      ))}
    </Wrapper>
//   );
  // }
