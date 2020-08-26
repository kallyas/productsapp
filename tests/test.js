'use strict';

require('mocha');
var assert = require('assert');
var productsapp = require('..');

describe('productsapp', () => {

  it('should export an object', () => {
    assert(productsapp);
    assert.equal(typeof productsapp, 'object');
  });

  it('should throw an error when invalid args are passed', () => {
    assert.throws(() => {
      productsapp();
    });
  });

});