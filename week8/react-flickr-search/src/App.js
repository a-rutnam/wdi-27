import React, { Component } from 'react';
import './App.css';

import FlickrSearch from './FlickrSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlickrSearch />
      </div>
    );
  }
}

export default App;
