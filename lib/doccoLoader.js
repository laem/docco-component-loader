var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec
var htmlLoader = require('html-loader')
var docco = require('./docco/docco')
var loaderUtils = require('loader-utils');
var HTMLtoJSX = require('htmltojsx');
var jsxLoader = require('jsx-loader')

module.exports = function(source) {
  var _this = this;
  var sourcePath = loaderUtils.getRemainingRequest(this);

  var html = docco.run({
    args: [sourcePath],
    return: 'html',
    layout: 'body' // No html, just the content of the body
  })



  //escape curly braces now, they will be interpreted by the jsx parser
  html =  html.replace(/\}/g, '__closing_curly_brace__')
              .replace(/\{/g,  "{'{'}")
              .replace(/__closing_curly_brace__/g, "{'}'}")

  //console.log(html)

  var converter = new HTMLtoJSX({
    createClass: true,
    outputClassName: 'AwesomeComponent'
  });

  var jsxCode = converter.convert(html);


  jsxCode = "/** @jsx React.DOM */" + "var React = require('react/addons');" + jsxCode
  jsxCode += "module.exports = AwesomeComponent"



  console.log(jsxCode)


//  var jsCode = jsxLoader(jsxCode)
//  console.log("JSCONDE,", jsCode)

  return jsCode

};
