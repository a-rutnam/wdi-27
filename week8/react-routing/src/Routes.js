import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import FAQ  from './components/FAQ';

const Error404 = props => {
  return <div>NO MATCHING ROUTE!</div>;
}

const Routes = (
  <Router>
    <div>
       { /* Map a URL route to a component which will be rendered when that URL is requested  */}
       <Route exact path="/"        component={ Home } />
       <Route exact path="/faq"     component={ FAQ  } />
       <Route path="/faq/:id"       component={ FAQ  } />
       {/* <Route                   component={ Error404 } />  Default ie. no-match route */}
    </div>
  </Router>
);

export default Routes;
