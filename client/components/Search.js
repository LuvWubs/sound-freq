import React, { Component } from 'react';
import axios from 'axios';


//NOTE need to list api url here!
const BASEURL = "put api url here";

class Search extends Component {

  state = {
    query: '',
  }

  handleInput = (e) => {
    //const name = e.target.name;
    //const value = e.target.value;
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

    search: function(query) {
      return axios.get(BASEURL + {this.state.query});
    }


  searchSong = (e) => {
    e.preventDefault();

    let url = BASEURL + this.state.query;
    //NOTE need to 'return' the data???
    return axios.get(BASEURL + {this.state.query});
    axios.get(url, (data) => {
      //NOTE put song on preset
      console.log('data', data);
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchSong}>
          <input
            name="query"
            onChange={this.handleInput}
            //onChange={(e) => this.setState({ query: e.target.value })}
            placeholder="Search for..."
            value={this.state.query}
          />
          <input
            className="btn btn-success"
            type="submit"
            value="Search"
          />
        </form>

      </div>
    );
  }
}

export default Search;
