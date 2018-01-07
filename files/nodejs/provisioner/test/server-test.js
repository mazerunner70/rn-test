var assert = require('assert');
var Server = require('../server/server.js');
var sinon = require ('sinon');
var restify = require('restify');

describe('Server tests', function() {
  describe('drespond tests', function() {
    it('Should sent once', function() {
      var server = new Server();
      var resCount = 0;
      var nextCount = 0;
      var resText = null;
      var resCallback = {
        send(text) {
          resCount++;
          resText = text;
        }
      };
      var nextCallback = function() {
      nextCount++;
      };
      server.drespond(null, resCallback, nextCallback);
      assert.equal(resCount, 1);
      assert.equal(resText, "kjhg");
    });
  });
});

