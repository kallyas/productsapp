'use strict';

require('mocha');
var assert = require('assert');
var productsapp = require('..');

describe('productsapp', function() {
  it('should export a function', function() {
    assert.equal(typeof productsapp, 'function');
  });

  it('should export an object', function() {
    assert(productsapp);
    assert.equal(typeof productsapp, 'object');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      productsapp();
    });
  });

});