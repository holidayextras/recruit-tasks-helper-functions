var assert = require('assert');
var helpers = require('./helpers');

describe('Helper functions', function() {

  describe("select(array, truthTest)", function() {

    it("returns a new array containing values which pass the truth test", function() {
      var expected = [2,4,6,8,10];
      var test = function(number) {
        return number % 2 == 0
      };
      assert.deepEqual(helpers.select([1,2,3,4,5,6,7,8,9,10], test), expected);
    });

  });

  describe("reject(array, truthTest)", function() {

    it("returns a new array containing values which fail the truth test", function() {
      var expected = [1,3,5,7,9];
      var test = function(number) {
        return number % 2 == 0
      };
      assert.deepEqual(helpers.reject([1,2,3,4,5,6,7,8,9,10], test), expected);
    });

  });

  describe("removeFalsy(array)", function() {

    it("removes falsy items from the passed in array", function() {
      var expected = ["foo", 1, true, [], {}];
      assert.deepEqual(helpers.removeFalsy(["foo", 1, true, [], {}, 0, "", false, null, undefined]), expected);
    });

  });

  describe("returnFalsy(array)", function() {

    it("returns a new array containing falsy items from the passed in array", function() {
      var expected = [0, "", false, null, undefined];
      assert.deepEqual(helpers.returnFalsy(["foo", 1, true, [], {}, 0, "", false, null, undefined]), expected);
    });

  });

  describe("union([array])", function() {

    it("returns a new array which is a union of the passed in arrays", function() {
      var expected = ["foo", "bar", "baz", "potato"];
      assert.deepEqual(helpers.union(["foo", "bar", "baz"], ["foo", "bar"], ["foo", "bar", "potato"]), expected);
    });

  });

  describe("intersection([array])", function() {

    it("returns a new array which is an intersection of the passed in arrays", function() {
      var expected = [1,2,3];
      assert.deepEqual(helpers.intersection([1,4,2,5,3,6], [3,7,2,8,1,9], [2,10,1,11,3,12]), expected);
    });

  });

});