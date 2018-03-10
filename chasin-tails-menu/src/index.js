import React from 'react';
import { render } from 'react-dom';
import Entrance from './components/Entrance';
import App from './components/App';
// import the css here; no need to put it on index.html
import './css/style.css';


// using react-dom to mount entire React app onto DOM
// render method takes jsx and mounting point on DOM as arguments
render(<App />, document.querySelector('#main'));
