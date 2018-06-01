import React, { Component } from 'react';
// import logo from './logo.svg';
import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <HelloWorld />
        <HelloUser name="Bill" imgWidth="300" imgHeight="300" />
        <HelloUser name="Grant" imgWidth="400" imgHeight="400" />
      </div>
    );
  }
}

// Stateless Functional Component - no internal variables (state) of its own
// (can still have props passed in, though!)
// const App = function(){
//   // return React.createElement('div', null, React.createElement('p', null, 'Hello World'));
//   return (
//     <div className="myComponent">
//       <p>Hello World</p>
//       <p>Hello World</p>
//     </div>
//   );
// 
// };

// class App extends Component {
//   render() {
//     return <div>Hello</div>;
//   }
// }

export default App;
