import React from 'react';
import ReactDOM from 'react-dom';

// import App from "./App";
// import Heading  from "./Heading";
 import "./style.css";
let curDate = new Date(2022, 8, 2, 20);
curDate = curDate.getHours();
let greeting = ' ';
const cssStyle = {

};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'brown';
}

ReactDOM.render(
  <>
    <div>
      <h2>
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h2>
    </div>
  </>,
  document.getElementById('root')
);
