import React from "react";
import Tables from "./components/Tables";
//import modulators??
//import howler here??

const Presets = props => (
  <div className="presetBtn">
    <span className="name">
      {props.name}
    </span>



    {/* NOTE does this props.name need {}? */}



    <span onClick={() => props.newSong(props.name)} className="newSong">
      𝘅
    </span>
    <span className="playIt">
      Play
    </span>
  </div>
);

export default Form;
