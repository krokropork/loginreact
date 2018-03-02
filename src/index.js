import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker'
import Routing from './routing';

// Todo css
import 'bootstrap/dist/css/bootstrap.css'
import './scss/style.css'
import './scss/util.css'

ReactDOM.render(
    <div className="App">
        <Routing></Routing>
    </div>  
, document.getElementById('root'));
registerServiceWorker();
