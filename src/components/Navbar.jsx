import React from 'react'
import { Component } from "react";
import '../css/Navbar.css'


class Navbar extends Component {
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked:
      !this.state.clicked
    })
  }
  render(){
  return (
    <>    
          <nav id="nav-header">
            <a className='brand' href="/#home">Harish Khangar</a>
            <div>
              <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li><a className="active" href="/#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><button type="button" className="btn btn-success">Hire Me</button></li>
              </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
              <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </nav>

</>

  );
  }
}

export default Navbar;
