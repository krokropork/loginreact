import React, { Component } from 'react'
import {
    BrowserRouter as Switch,
    Route,
  } from "react-router-dom"

import Home from './pages/home/home'
import Login from './pages/login/login'

  class Routing extends Component{
    render() {
        return(
          <Switch>
              <div>               
                <Route path="/home" name="home" component={Home}></Route>
                <Route path="/login" name="login" component={Login}></Route>
              
              </div>
           </Switch>
        )
    }
  }

  export default Routing;