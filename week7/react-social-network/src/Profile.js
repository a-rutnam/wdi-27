import React, { Component } from 'react';

class Profile extends Component {

  constructor(props){
    super(props);

    this.state = {
      imageHeight: this.props.imageHeight
    };

    this.updateHeight = this.updateHeight.bind( this );
  }

  updateHeight( event ){
    // console.log('event val', event.target.value);
    if( event.target.value.length >= 3 ){
      this.setState({ imageHeight: event.target.value });
    }
  }

  render(){
    console.log(`Running render() for ${this.props.name}`);
    const {name, age, bio} = this.props; // destructuring

    return (
      <div className="profileContainer">
        <h1>{ name }</h1>
        <h2>{ age }</h2>
        <p>Biography: <em>{ bio }</em></p>
        <img src={`http://fillmurray.com/600/${ this.state.imageHeight }`} alt={ name } />
        <p>Image height: { this.state.imageHeight }</p>
        <br />
        <input onChange={ this.updateHeight } />
      </div>
    );
  }

}

export default Profile;
