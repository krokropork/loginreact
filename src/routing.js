import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";

import Home from './pages/home/home';
import Login from './pages/login/login';

  class Routing extends Component{
    render() {
        return(
            <Router>
              <div>
                <Route exact path="/" component={Home} re></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
              </div>
            </Router>
        )
    }
  }

  export default Routing;