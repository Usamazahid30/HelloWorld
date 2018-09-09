import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Hello extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}
class World extends Component {
  render() {
    return (
      <div>
        <Hello />
        World
      </div>
    );
  }
}

export default World;
