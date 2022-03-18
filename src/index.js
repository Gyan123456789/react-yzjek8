import React from 'react';
import ReactDOM from 'react-dom';

// import App from "./App";
// import Heading  from "./Heading";
 import "./style.css";
let curDate = new Date();
curDate = curDate.getHours();
let greeting = ' ';
const cssStyle = {

};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon';
  cssStyle



ReactDOM.render(
  <>
      
  </>,
  document.getElementById('root')
);
