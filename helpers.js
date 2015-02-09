// --- Helper Functions Module ---
//
// Your mission is to refactor this code for the better as much as possible.
// You may want to consider the following:
//
//   - Code repetition
//   - Code clarity
//   - Testability
//   - Ways in which this code could fail.
//
// Some things you might like to know:
//
//   - Anything assigned to module.exports will be publicly available when
//     this module is used in other projects.
//   - Functions starting with an "_" will be considered private, even
//     when available via module.exports.
//   - Check out https://dorey.github.io/JavaScript-Equality-Table/ for
//     any help with "falsy" values if you're not familiar with JS.
//   - Some of the functions further down get pretty complex, try your
//     best and ask us at ...github url here... if you're having issues
//     understanding the existing bad implementations.
//
// Good luck!
//
// -----------------------

module.exports = {

  // Checks each item in the array against the truth test,
  // and returns a new array containing those that pass
  // the truth test.
  select: function(array, truthTest) {
    var result = [];
    array.forEach(function(item) {
      if (truthTest(item)) {
        result.push(item);
      }
    });
    return result;
  },

  // Checks each item in the array against the truth test,
  // and returns a new array containing those that fail
  // the truth test.
  reject: function(array, truthTest) {
    var result = [];
    array.forEach(function(item) {
      if (!truthTest(item)) {
        result.push(item);
      }
    });
    return result;
  },

  // Remove any falsy items from the supplied array.
  removeFalsy: function(array) {
    for (var i = 0; i < array.length; i++) {
      if (!array[i]) {
        array.splice(i,1);
        i--;
      }
    }
    return array;
  },

  // Returns a new array containing all of the falsy values
  // from the original array argument.
  returnFalsy: function(array) {
    var result = [];
    array.forEach(function(item) {
      if (!item) {
        result.push(item);
      }
    });
    return result;
  },

  // Return a new array that's a union of any passed in arrays.
  // A union being all distinct elements from all passed in arrays
  union: function() {
    var result = [];
    var argumentArray = Array.prototype.slice.call(arguments); // 'arguments' is anything passed into function.

    argumentArray.forEach(function(array) {
      array.forEach(function(item) {
        if (!~result.indexOf(item)) {
          result.push(item);
        }
      });
    });
    return result;
  },

  // Return a new array that's an intersection of any passed in arrays.
  // An intersection being every item shared between all passed in arrays.
  intersection: function() {
    var result = [];
    var argumentArray = Array.prototype.slice.call(arguments);

    for (var i = 0; i < argumentArray.length; i++) {
      argumentArray[i].forEach(function(item) {
        var inAll = true;

        for(var x = 0; x < argumentArray.length; x++) {
          if (inAll && x !== i) {
            inAll = !!~argumentArray[x].indexOf(item);
          }
        }

        if (inAll && !~result.indexOf(item)) {
          result.push(item);
        }
      });
    };

    return result;
  }

};