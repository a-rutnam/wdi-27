import React, { PureComponent } from 'react';

// const HelloUser = function( props ){
//   console.log( props );
//   return (
//     <div className="user">
//       <h2>Hello, { props.name }</h2>
//       <img src={ `http://fillmurray.com/${ props.imgWidth }/${ props.imgHeight }`} alt={ props.name } />
//     </div>
//   );
// };
//

const BillImage = function(props){
  return <img src={ `http://fillmurray.com/${ props.imgWidth }/${ props.imgHeight }`} alt={ props.name } />;
};

class HelloUser extends PureComponent {
  render(){
    return (
      <div className="user">
        <h2>Hello, { this.props.name }</h2>
        <BillImage name={ this.props.name } imgWidth={ this.props.imgWidth } imgHeight={ this.props.imgHeight} />
      </div>
    )
  }
}

export default HelloUser;
