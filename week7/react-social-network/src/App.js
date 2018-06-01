import React, { Component } from 'react';
import './App.css';

import Profile from './Profile';

class App extends Component {
  
  constructor(){
    super();
    
    this.state = {
      profiles: [
        { name: 'Granttt', age: 25, imageHeight: 200, bio: 'I once shot an elephant in my pyjamas...'  },
        { name: 'Bill Murray', age: 67, imageHeight: 400, bio: 'No godz no masterz'  }
      ]
    };
    
  }
  
  
  render(){
    return (
       <div className="App">
       {  
         this.state.profiles.map( p => 
           <Profile 
             key={p.name} 
             name={p.name} 
             age={p.page} 
             bio={p.bio} 
             imageHeight={p.imageHeight} 
           />) 
       }
       </div>
    );
  }
  
  // render() {
  //   return (
  //     <div className="App">
  //       <Profile 
  //         name="Grant Hanrahanrahan" 
  //         age="25"
  //         imageHeight="200"
  //         bio="I once shot an elephant in my pyjamas..."
  //       />
  //       <Profile 
  //         name="Bill Murray"
  //         age="67"
  //         imageHeight="400"
  //         bio="No gods no masters"
  //       />
  //     </div>
  //   );
  // }
}

export default App;
