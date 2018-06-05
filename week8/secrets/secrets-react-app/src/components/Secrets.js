import React, {Component} from 'react';
import axios from 'axios';

import SecretsForm from './SecretsForm';

import '../App.css';

const SERVER_URL = 'http://localhost:3000/secrets.json';

class Secrets extends Component {

  constructor(){
    super();

    this.state = {
      secrets: []
    }

    this.saveSecret = this.saveSecret.bind( this );
  }

  componentWillMount(){
    // Can make initial AJAX request here, but this happens before the first render()
  }

  componentDidMount(){
    // this will run AFTER the component mounts and has done a render() once

    const fetchSecrets = () => {
      axios.get(SERVER_URL).then( response => {
        console.log(response, response.data);
        this.setState({ secrets: response.data.reverse() });  // save the response data into state
      });
    };

    // load secrets from backend as soon as this component mounts, and then re-load once
    // a second, to make sure the page always shows an up-to-date list of secrets
    fetchSecrets();
    setInterval(fetchSecrets, 5000);

  }

  saveSecret( secret ){
    console.log('in Secrets::saveSecret()', secret);

    // POST secret data to server via Ajax
    axios.post(SERVER_URL, { content: secret })
    .then( response => {
      console.log('response:', response, response.data  );
      this.setState({ secrets: [ response.data.secret, ...this.state.secrets ]  });
    });

  }

  getMessage(){
    return "hello textarea";
  }

  render(){
    return (
      <div className="App">
        <h1>Tell us Your Secret</h1>
        <SecretsForm reportSecret={ this.saveSecret } />
        {
          this.state.secrets.length && this.state.secrets.map( s => <p key={ s.id }>{ s.content }</p>)
        }
      </div>
    );
  }

}

export default Secrets;
