import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './login.js';
import Playeradmin from './playeradmin.js';
import Players from './players.js';
import Useradmin from './useradmin.js';

const User = (params) =>{
  return (<h2>Welcom  {params.username}</h2>)
}

class Header extends Component {
  state= {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState(
      prevState => (
        {
          loggedIn: !prevState.loggedIn
        }
      )
    )
  }
  render() {
    return (
      <Router>       
      <div className="App">
        <ul className="list-inline">
        <li>
        <NavLink to="/" exact activeStyle={
         { color:'green'} 
        }>Home</NavLink>
        </li>
        <li>
        <NavLink to="/useradmin" exact activeStyle={
         { color:'green'} 
        }>User administration</NavLink>
        </li>
        <li>
        <NavLink to="/playeradmin" exact activeStyle={
         { color:'green'} 
        }>Create Player</NavLink>
        </li>
        <li>
        <NavLink to="/players" exact activeStyle={
         { color:'green'} 
        }>List Players</NavLink>
        </li>
        <li>
        <NavLink to="/login" exact activeStyle={
         { color:'green'} 
        }>Login</NavLink>
        </li>
        </ul>
        <Route path="/" exact={true} render={
          () => {
            return (<h1>Welcome to Alchemy Front End Test</h1>);
          }
        } />    
        <Route path="/useradmin" exact={true} strict render={
          () => {
            return (
              <Useradmin />
            );
          }
        } />
        <Route path="/playeradmin" exact={true} strict render={
          () => {
            return (
              <Playeradmin />
            );
          }
        } />
        <Route path="/players" exact={true} strict render={
          () => {
            return (
              <Players />
            );
          }
        } />
        <Route path="/login" exact={true} strict render={
          () => {
            return (
              <Login />
            );
          }
        } />   

      </div>
      </Router>
    );
  }
}


export default Header;
