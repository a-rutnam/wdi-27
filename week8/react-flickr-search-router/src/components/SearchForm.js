import React, {Component} from 'react';
import '../App.css';

class SearchForm extends Component {

  constructor(){

    super();  // calls constructor() on parent class Component

    this.state = {
      query: ''
    }

    this._handleInput = this._handleInput.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }

  _handleInput( event ){
    console.log(event.target.value, event);

    //this.state.query = event.target.value;  // NO!
    this.setState({query: event.target.value});
  }

  _handleSubmit( event ){
    event.preventDefault();
    // console.log( this.state.query );

    // Invoke the callback function passed in from our parent component as a prop
    // We pass an argument to the callback so the parent gets notified of what was typed into the input field
    // i.e. this actually calls the fetchImages( "somequerytext" ) method on the parent component object
    // this.props.onSearchSubmit( this.state.query );
    
    console.log( '_handleSubmit():', this.state.query );
    
    this.props.history.push(`/search/${ this.state.query }`)
    
  }

  render(){
    return (
      <div className="App">
        <h1>Flickr Search</h1>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" placeholder="dogs" onChange={ this._handleInput } />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
