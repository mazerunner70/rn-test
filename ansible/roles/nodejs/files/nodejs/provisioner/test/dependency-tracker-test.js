var assert = require('assert');
var DependencyTracker = require('../dependency-tracker/dependency-tracker.js');
var dependencyTracker = new DependencyTracker();

describe('Say Hello', function() {
  describe('Confirm strings', function() {
    it('It should work when given a non-empty string', function() {
      assert.equal(dependencyTracker.sayHello("Mike"), "Hello Mike");
    });
    it('It should work when given a null string', function() {
      assert.equal(dependencyTracker.sayHello(null), "Hello null");
    });
  });
});

describe("Respond", function() {
  describe("See stringified response", function() {
    it('should show the correct text', function() {
      var correctString='[{"name":"Rasbian","curr_ver":1,"last_update":"010-02-18T17:59:41","new_ver":60,"last_check":"010-02-18T17:59:41"},{"name":"Rasbian","curr_ver":1,"last_update":"010-02-18T17:59:41","new_ver":60,"last_check":"010-02-18T17:59:41"}]';
      assert.equal(dependencyTracker.respond(), correctString);
    });
  });
});

