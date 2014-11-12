'use strict';

describe('Main', function () {
  var DoccoLoaderApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    DoccoLoaderApp = require('../../../src/scripts/components/DoccoLoaderApp.jsx');
    component = DoccoLoaderApp();
  });

  it('should create a new instance of DoccoLoaderApp', function () {
    expect(component).toBeDefined();
  });
});
