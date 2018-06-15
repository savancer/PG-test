import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';

class App extends Component {
  state= {
    loggedIn:false
  }
  
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
