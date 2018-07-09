import React, { Component } from "react";
import Nav from "./components/Nav";
import Wrapper from "./components/Wra";
import Presets from "./components/Presets";
import Tables from "./components/Tables";
import presets from "./seeds.json";
import ReactHowler from 'react-howler';


//NOTE check functionality w/o axios
import axios from 'axios';

//NOTE should this extend component or should it be incorporated into the code within App = () == =>
class App extends Component {

  state = {
    presets
  };

  newSong = selector => {
    event.preventDefault();
    let song = this.state.presets.filter(song => presets.name !== selector);
    this.setState({ song });
  };


//NOTE need to incorporate this onClick functionality onto DOM elements.. not sure what file to put this into????
      $('#nav-expander').on('click',function(e){
    		e.preventDefault();
    		$('body').toggleClass('nav-expanded');
    	});

    	$('#nav-close').on('click',function(e){
    		e.preventDefault();
    		$('body').removeClass('nav-expanded');
    	});
      $('.list-soundThemes').on('click',function(e){
    		e.preventDefault();
    		$('body').removeClass('nav-expanded');
    	});


}

export default App;
