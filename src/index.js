//import is a webpack thing
//use '' single quotes, react consider it as JS

import React from 'react';
import ReactDOM from 'react-dom'; //Only time that we will use this; it takes in component and the ID that it should target (HTML)
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

