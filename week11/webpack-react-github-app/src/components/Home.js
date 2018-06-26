import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render(){
    return (
      <div>
          <h1>GitHub MicroSoft&copy; Search<sup>*</sup></h1>
        <Link to="/search"> {/* Rails: <%= link_to search_path %> */}
          <button>Search for a user</button>
        </Link>
        <button>Random user profile</button>
      </div>
    );
  }
}

export default Home;
