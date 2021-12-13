import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import reportWebVitals from './reportWebVitals';
import HOME_PAGE_LIB_CARDS from './data/homepage_cards.json';
import HEADER_INFO from './data/header.json';

ReactDOM.render(
  <App home={HOME_PAGE_LIB_CARDS} nav={HEADER_INFO}/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
