/**
 * @jsx React.DOM
 */

'use strict';
require('docco/resources/linear/docco.css')

var Doccomponent = require('../../../lib/docco-loader/Doccomponent')
var doc1 = require('../../../lib/docco-loader/index.js!../../doc/docco.litcoffee');

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
//require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var DoccoLoaderApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Doccomponent html={doc1} />
      </div>
    );
  }
});
React.render(<DoccoLoaderApp />, document.getElementById('content')); // jshint ignore:line

module.exports = DoccoLoaderApp;
