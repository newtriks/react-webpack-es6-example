'use strict';

import 'babel/polyfill';

import React from 'react';
import App from './components/App';

var path = decodeURI(window.location.pathname);

function run() {
  var props = {};
  // Render the top-level React component
  var component = React.createElement(App, props);
  var app = React.render(component, document.body);
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  })
]).then(run);
