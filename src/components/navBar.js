import React from 'react'
import './NavBar.css'

import {ReactComponent as MyLogo} from './KGF_logo.svg';

import Fade from 'react-reveal/Fade';


class NavBar extends React.Component {
  render() {
    return (
      <Fade top delay={3000}>
        <nav className="header-navbar">
          <div className="inner-nav span_8_of_12">
          <Fade top cascade delay={3500}>
            <a href="#home" className="logo-container"><MyLogo className="my-logo" /></a>
            <a href="#projects" className="links">projects</a>
            <a href="#about" className="links">about</a>
            <a href="#contact" className="button"><span className="button-text">contact</span></a>
          </Fade>
          </div>
        </nav>
      </Fade>
    )
  }
}




export default NavBar