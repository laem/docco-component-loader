/**
 * @jsx React.DOM
 */

'use strict';
require('../../../lib/docco/resources/linear/docco.css')

var Doc1 = require('../../../lib/doccoLoader.js!../../doc/tintin.js');
//var Docco = require('../../../lib/doccoLoader.js!../../../lib/docco/docco.litcoffee');

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
        <ReactTransitionGroup transitionName="fade">
          <div  dangerouslySetInnerHTML={{__html: "<div>Yo }   </div>"}}/>
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.renderComponent(<DoccoLoaderApp />, document.getElementById('content')); // jshint ignore:line

module.exports = DoccoLoaderApp;
