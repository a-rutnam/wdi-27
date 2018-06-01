import React, { Component } from 'react';
import Clickr from './Clickr';

class HistoryEraser extends Component {

  constructor(){
    super();

    this.state = {
      historyStillExists: true
    };

    this.maybeEraseHistory = this.maybeEraseHistory.bind(this);
  }

  maybeEraseHistory( clickCount ){
    console.log('maybeEraseHistory():', clickCount);

    if( clickCount === 4 ){
      this.setState({ historyStillExists: false });
    }

  }

  render(){

    const bannerColour = this.state.historyStillExists ? '#ccc' : 'red';

    return (
      <div style={ {backgroundColor: bannerColour} }>
        <h1>HISTORY ERASER BUTTON!</h1>
         <Clickr
           message="Appears on button"
           stopClickingAfter={4}
           everyClick={ this.maybeEraseHistory }
          />

         {
           this.state.historyStillExists ? <h1>All is well</h1> : <h1>YOU FOOL, YOU ERASED HISTORY</h1>

           /* statements (if, for, switch, class) are not allowed in JSX { } interpolations

           if( this.state.historyStillExists ){
             <h1>All is well</h1>
           } else {
             <h1>YOU FOOL, YOU ERASED HISTORY</h1>
           }
           */

         }

      </div>
    );
  }
}

export default HistoryEraser;
