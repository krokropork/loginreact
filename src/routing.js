import React, { Component } from 'react'
import {Switch, Route, Redirect } from "react-router-dom"

import Home from './pages/home/home'
import Login from './pages/login/login'

  class Routing extends Component{
    render() {
        return(
          <Switch>
                <Route path="/home" name="home" component={Home}></Route>
                <Route path="/login" name="login" component={Login}></Route>
                <Redirect from="/" to="/login"/>
          </Switch>
        )
    }
  }

  export default Routing;