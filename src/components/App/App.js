'use strict';

import React from 'react';
import Example from '../Example';

// CSS imports
import './App.css';

var Application = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      data: {
        emcees: [
          {name: 'Jam Master Jay'},
          {name: 'Run'},
          {name: 'D.M.C'}
        ]
      }
    };
  },

  render() {
     return (
      /* jshint ignore:start */
      <div className="App">
      	<Example emcees={this.props.data.emcees} />
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Application;
