import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AddEmployee from './addnew'
import AddNewEmployee from './addNewEmployee'

class App extends Component {
  render() {
    return (
        <div>
        <AddEmployee/>
        <AddNewEmployee/>
        </div>
    );
  }
}

export default App;