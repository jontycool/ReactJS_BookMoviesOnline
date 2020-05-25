import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Booking from './booking';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const routing = (
  <Router basename={window.location.pathname || ''}>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/booking' component={Booking} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
