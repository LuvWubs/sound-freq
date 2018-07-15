import React, { Component } from "react";
//import API from "../../utl/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <nav>
        <div className="navbar navbar-inverse navbar-fixed-top">
          <Link className="navbar-brand" to="/">SoundFreq</Link>
          <div className="navbar-header pull-right">
            <a id="nav-expander" className="nav-expander fixed">
              MENU &nbsp;<i className="fa fa-bars fa-lg white"></i>
            </a>
          </div>
        </div>
        <div style={{ marginTop: '30px' }}>
        <ul className="list-unstyled main-menu">
          <li className="text-right"><a href="#" id="nav-close">[close]</a></li>

          <li>
            <form id="form-group" method="GET">Audio Themes
              <ul className="list-soundThemes">
                <li className="sound-nav"><a href="/bugs" className="list" id="bug">Bugs<span className="icon"></span></a></li>
                <li className="sound-nav"><a href="#" className="list" id="drops">Drops<span className="icon"></span></a></li>
                <li className="sound-nav"><a href="#" className="list" id="electronics">Electronics<span className="icon"></span></a></li>
                <li className="sound-nav"><a href="#" className="list" id="noise">Noises<span className="icon"></span></a></li>
                <li className="sound-nav"><a href="#" className="list" id="all">All Themes<span className="icon"></span></a></li>
              </ul>
            </form>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
