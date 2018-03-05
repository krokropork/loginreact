import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'


import registerServiceWorker from './registerServiceWorker'
import Routing from './routing'
import Page404 from './pages/error/404/404'
// Todo css
import 'bootstrap/dist/css/bootstrap.css'
import './scss/style.css'
import './scss/util.css'

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/404" name="Page 404" component={Page404}/>
            <Route path="/" name="Home" component={Routing}/>
            <Route component={Page404} />
        </Switch>
    </Router>  
, document.getElementById('root'));
registerServiceWorker();
