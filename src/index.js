import React from 'react'
import ReactDOM from 'react-dom'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import App from './for-test/App'

// Render the App element into the DOM
ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
