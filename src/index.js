import sum from './sum';
import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => {
  console.log(sum(2, 4));
  return <h1>Hello, world!</h1>;
}

// Render the Root element into the DOM
ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
