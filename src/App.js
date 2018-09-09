import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./input";
import Button from "./button"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input/>
        <Button className='btn btn-primary' value1="button1" value2="button2" value3="button3"/>
      </div>
    );
  }
}



export default App;
