import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FAQ extends Component {

  render(){
    return (
      <div>
        <h2>This is the FAQ page, where all your questions are answered.</h2>
        <Link to="/">Home</Link>
        <br />

        {
          this.props.match.params.id
          ?
          <h3>You asked for ID # { this.props.match.params.id }</h3>
          :
          <p>Choose an ID</p>
        }

      </div>
    );
  }
}

export default FAQ;
