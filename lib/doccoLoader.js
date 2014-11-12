var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec
var htmlLoader = require('html-loader')
var docco = require('./docco/docco')
var loaderUtils = require('loader-utils');
var HTMLtoJSX = require('htmltojsx');
var jsxLoader = require('jsx-loader')
var reactTools = require('react-tools');
var React = require('react')


module.exports = function(source) {
  var _this = this;
  var sourcePath = loaderUtils.getRemainingRequest(this);

  var html = docco.run({
    args: [sourcePath],
    return: 'html',
    layout: 'body' // No html, just the content of the body
  })






  return htmlLoader(html);

  //below is TODO an attempt to create a React component. Not successful

//first attemp

  var Component = React.createClass({
    render: function(){
      return React.createElement("div", {dangerouslySetInnerHTML: {__html: html}})
    }
  })

  var component =  Component.toString()

  var component = "var React = require('react'); var Component = " + component
    + ";module.exports = Component";

  return component

//second attempt




  //escape curly braces now, they will be interpreted by the jsx parser
  html =  html.replace(/\}/g, '__closing_curly_brace__')
              .replace(/\{/g,  "{'{'}")
              .replace(/__closing_curly_brace__/g, "{'}'}")

  var HTMLtoJSX = require('htmltojsx');
  var converter = new HTMLtoJSX({
    createClass: true,
    outputClassName: 'AwesomeComponent'
  });
  var component = converter.convert(html);

  var component = "var React = require('react');" + component
    + "module.exports = AwesomeComponent"

  var jsCode =  reactTools.transformWithDetails(component, {
        harmony: true
        });

console.log(component)

  return jsCode.code
};
