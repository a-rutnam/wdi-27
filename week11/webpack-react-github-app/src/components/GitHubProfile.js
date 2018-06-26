import React, { Component } from 'react';

import GitHub from '../githubUtils';

class GitHubProfile extends Component {

  componentWillMount(){

    GitHub.getUserInfo( this.props.match.params.username )
    .then( response => {
      console.log( response );
      // save into state
    })
    .catch( console.warn );

    // Get repos here, new method in ../githubUtils.js
    // save response into state
  }

  render(){
    return (
      <div>
      <h1>GitHub MicroSoft&copy; Search</h1>
      <h2>{ this.props.match.params.username }</h2>
      { /*

        <Stats data={ this.state.......} / >
        - followers
        - following
        - repos
        - gists

        <Repos data={ this.state.......} />
        - list of repo names, with links to the repo page

      */ }
      </div>
    );
  }

}

export default GitHubProfile;
