import React, { Component } from 'react';
import GitHub from '../githubUtils';
import PropTypes from 'prop-types';

class GitHubProfile extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: null,
      repos: null
    };
  }

  componentWillMount(){
    console.log('mounted!');

    GitHub.getUserInfo( this.props.match.params.username )
    .then( response => {
      console.log( response );
      this.setState({ user: response.data }) // save into state
    })
    .catch( console.warn );

    GitHub.getUserRepos( this.props.match.params.username )
    .then( response => {
      console.log( response );
      this.setState({ repos: response.data }) // save into state
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

        <Stats userInfo={ ['textchimp', 20] } />

        <Repos reposList={ this.state.repos } />

      </div>
    );
  }

}


class Repos extends Component {
  render(){

    if( this.props.reposList === null ){
      return <div className="repos">Loading...</div>;
    }

    const userRepos = this.props.reposList.map( repo => {
      return (
        <li key={ repo.name }>
          <a href={ repo.html_url }>{ repo.name }</a>
        </li>
      );
    });

    return (
      <div className="repos">
        <h3>Repositories</h3>
        <ul>
          { userRepos }
        </ul>
      </div>
    );
  }
}

class Stats extends Component {
  render(){

    if( this.props.userInfo === null ){
      return <div className="profile">Loading...</div>;
    }

    // Use ES6 object destructuring to pull keys out of an object,
    // giving some of the variable names which are different to the original key names
    const {login:loginName, followers:followersCount, following:followingCount, public_repos, public_gists} = this.props.userInfo;

    return (
      <div className="profile">
        <h3>Stats for { loginName }</h3>
        <p>Followers: {followersCount}</p>
        <p>Following: {followingCount}</p>
        <p>Repos: {public_repos}</p>
        <p>Gists: {public_gists}</p>
      </div>
    );
  }
}

Stats.propTypes = {
  userInfo: PropTypes.object.isRequired
};


export default GitHubProfile;
