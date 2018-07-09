import React from "react";
import navCSS from "./css/navbar.css";

const Nav = props => (



  //NOTE where does {props.children} go???



  <div id="canvas-main" className="container-fluid">

    <nav>
      <ul className="list-unstyled main-menu">
        <li className="text-right"><a href="#" id="nav-close">[close]</a></li>

        <li>
          <form id="form-group" method="GET">Audio Themes
            <ul className="list-soundThemes">
              <li className="sound-nav"><a href="#" className="list" id="bug">Bugs<span className="icon"></span></a></li>
              <li className="sound-nav"><a href="#" className="list" id="drops">Drops<span className="icon"></span></a></li>
              <li className="sound-nav"><a href="#" className="list" id="electronics">Electronics<span className="icon"></span></a></li>
              <li className="sound-nav"><a href="#" className="list" id="noise">Noises<span className="icon"></span></a></li>
              <li className="sound-nav"><a href="#" className="list" id="all">All Themes<span className="icon"></span></a></li>
            </ul>
          </form>
        </li>
      </ul>
    </nav>

    <div className="navbar navbar-inverse navbar-fixed-top">
      <a className="navbar-brand" href="index.html">SoundFreq</a>
      <div className="navbar-header pull-right">
        <a id="nav-expander" className="nav-expander fixed">
          MENU &nbsp;<i className="fa fa-bars fa-lg white"></i>
        </a>
      </div>
    </div>
    <div className="VJcanvas">

      {/* NOTE audio visual content will go here */}

    </div>

  </div>

)

export default Nav;
