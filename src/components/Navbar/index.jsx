import React, { Component, useState } from 'react';
import './index.css'; // Import your CSS file

class Navbar extends Component {

  state={clicked:false};

  handleClick = () =>{
    this.setState({
      clicked:!this.state.clicked
    })
  }
  render(){
  return (
    <>
     <nav>
      <a>IEEE</a>
        <div >
        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar "}>
          <li><a className='active' href="#">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">About</a></li>
        </ul>
     </div>
      <div id='mobile' onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
     </nav> 
     </>
  )
}
}

export default Navbar;
