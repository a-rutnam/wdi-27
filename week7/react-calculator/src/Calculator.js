import React, { PureComponent } from 'react';

// const Calculator = function( props ){
// };

class Calculator extends PureComponent {

  constructor(props){
    super(props);  // run the constructor() of the parent class

    this.state = {
      a: 0,
      b: 0
    };

    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this);
  }

  _updateA( event ){
    // console.log('_updateA():', event.target.value );
    // this.state.a = event.target.value;  NOT ALLOWED
    const a = parseFloat( event.target.value || 0 );

    // CALLING this.setState WILL TRIGGER THE render() method
    this.setState({ a }); // set the key 'a' to have the value of the variable a
  }

  _updateB( event ){
    // console.log('_updateA():', event.target.value );
    const b = parseFloat( event.target.value || 0 );
    this.setState({ b });
  }

  render(){
    console.log( 'render()', this.state );

    // const a = this.state.a;
    // const b = this.state.b;
    const {a, b} = this.state;   // ES6 destructuring

    return (
      <div>
        <h1>Calculator</h1>
        {/* Comments look like this */}
        <input type="number" onChange={ this._updateA  } />
        <input type="number" onChange={ this._updateB } />

        <h2>Results</h2>
        <p>{a} + {b} = { a + b }</p>
        <p>{a} - {b} = { a - b }</p>
        <p>{a} * {b} = { a * b }</p>
        <p>{a} / {b} = { a / b }</p>

      </div>
    );
  }

} // class Calculator

export default Calculator;
