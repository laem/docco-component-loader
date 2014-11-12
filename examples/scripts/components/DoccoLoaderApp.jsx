/**
 * @jsx React.DOM
 */

'use strict';
require('docco/resources/linear/docco.css')

var Doccomponent = require('../../../Doccomponent')
var doc1 = require('../../../index.js!../../doc/docco.litcoffee');

var React = require('react/addons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

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
