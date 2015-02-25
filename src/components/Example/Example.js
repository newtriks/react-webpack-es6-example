'use strict';

import React from 'react';

// CSS imports
import './Example.css';

var Example = React.createClass({

  propTypes: {
    emcees: React.PropTypes.array
  },

  getInitialState() {
    return {
      index: 0
    };
  },

  /* jshint ignore:start */
  render() {
  	let children = this.props.emcees.map(function(item, index) {
      return <li index={index} key={index}>{item.name}</li>;
    });
    return (
      <ul className="Example">
      	{children}
      </ul>
    );
  }
  /* jshint ignore:end */
});

module.exports = Example;