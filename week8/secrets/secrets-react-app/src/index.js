import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import Secrets from './components/Secrets';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Secrets />, document.getElementById('root'));
registerServiceWorker();
