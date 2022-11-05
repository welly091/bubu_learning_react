import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME TO MY PAGE</h1>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/about">About</Link> 
      </div>
    )
  }
}
