import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// import Hello from './components/Hello';

import Home from './components/Home';
import Search from './components/Search';
import GitHubProfile from './components/GitHubProfile';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } /> {/* Rails: get '/' => 'home#index' */}
      <Route exact path="/search" component={ Search } />
      <Route exact path="/details/:username" component={ GitHubProfile } />
    </div>
  </Router>
);


ReactDOM.render( Routes, document.getElementById('app') );
