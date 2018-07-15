import React from "react";

// export const Presets = props => (
class Presets extends Component {
  // constructor() {
  //   super();
  // console.log('presets hit', this.props);
  // }
//take in the state & load presets (or pull sounds down from mongo based on category chosen)


  componentDidMount() {
    this.setBtns();
  }

  setBtns() {
    {this.state.sounds.map(preset => {

    })}
  }


  render() {
    return (

        <button className="form-group" attr={this.state.file}>
          <span> {this.state.name} </span>
        </button>



    )
  }
};
{/* ); */}
