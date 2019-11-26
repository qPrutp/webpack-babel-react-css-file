import sum from './sum';
import React from 'react';
import ReactDOM from 'react-dom';

import './css/main.css';
import './scss/main.scss';

const Root = () => {
  console.log(sum(2, 4));
  return (
    <>
      <h1>Hello, world!</h1>
      <p>some text</p>
    </>
  )
}

// Render the Root element into the DOM
ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
