import React, {Component} from 'react';

class SecretsForm extends Component {

  constructor( props ){
    super( props );

    this.state = {
      content: ''
    }

    this._handleChange = this._handleChange.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }


  _handleSubmit( event ){
    event.preventDefault();

    this.props.reportSecret( this.state.content );
    // actually calls saveSecret() in Secrets component
  }

  _handleChange( event ){
    // console.log( event.target.value );
    this.setState({ content: event.target.value });
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange }>
        </textarea>
        <br />
        <input type="submit" value="Spill Ya Guts" />
      </form>
    );
  }

}

export default SecretsForm;
