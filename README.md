# Helper Functions Task (v0.0.1)

## Installation

We've tried to keep this as simple as possible to set up:
 - Install [node.js](http://nodejs.org/)
 - Navigate to the directory containing this project in your terminal.
 - Type `npm install`.
 - Run the tests with `npm run test` (you can use this to verify changes you're making aren't breaking things).

## The task

`helpers.js` is a JavaScript module containing a number of array helper functions very similar to ones we use here at Holiday Extras. As it stands, it's working pretty well, but the implemention is of a mediocre code quality. Your mission is to refactor the code in `helpers.js` for the better as much as possible. You may want to consider:

  - Code repetition, and opportunities to reduce it.
  - Code clarity, we generally like our code to be as readable as possible.
  - Testability, we like our code to be easily testable.
  - Ways in which this code could fail that might not have been considered. We like our code to handle what we expect it to handle, and fail fast otherwise.

Some more things you might like to know:

  - Anything assigned to `module.exports` in `helpers.js` will be publicly available when this module is used in other projects.
  - Any functions starting with an `_` will be considered intended to be private, even when available via module.exports.
  - Check out https://dorey.github.io/JavaScript-Equality-Table/ for any help with "falsy" values if you're not familiar with JS' slightly odd equality.
  - Some of the functions further down in the task get pretty complex, this is intentional, try your best and don't worry if you get stuck.
  - There's nothing to say you can't completely change the `helpers.js` file, do what you think works best given the considerations above.
  - The tests in `test.js` check that the functions work to some degree, but you may find ways to break these functions that the tests don't cover. Additional points will be given for new tests added that show you've identified and fixed edge case issues in the current module code.

Good luck, if you have any questions on the task, feel free to raise an issue on our github page at https://github.com/holidayextras/recruit-tasks-helper-functions. We won't give pointers on improving the code, but we will assist with understanding the existing code, getting things up and running and clarifying any of the requirements where possible.
