/*
This is the top level entry point responsible for attaching our entire React app to the DOM.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
