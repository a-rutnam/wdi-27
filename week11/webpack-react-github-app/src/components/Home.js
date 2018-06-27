import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const githubUsernames = [
  'textchimp',
  'grantjhanrahan',
  'eggyducktective',
  'bhagavathichirra',
  'achacttn',
  'liaa2',
  'agorodinskaya'
];

class Home extends Component {

  _handleRandomProfile(){
    console.log('clicked!');
    const index = Math.floor(Math.random() * githubUsernames.length);
    const username = githubUsernames[ index ];

    this.props.history.push(`/details/${ username }`);
  }

  render(){
    return (
      <div>
          <h1>GitHub MicroSoft&copy; Search<sup>*</sup></h1>
        <Link to="/search"> {/* Rails: <%= link_to search_path %> */}
          <button>Search for a user</button>
        </Link>
        <button onClick={ () => this._handleRandomProfile() }>Random user profile</button>
      </div>
    );
  }
}

export default Home;
