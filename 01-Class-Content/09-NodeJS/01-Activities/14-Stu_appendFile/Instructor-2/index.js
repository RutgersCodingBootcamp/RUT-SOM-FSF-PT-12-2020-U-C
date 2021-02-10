// TODO: What are we importing?
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// I want to use the fs module to append to a file called "log.txt"
// The data goes into the second argument
// The third argument is a callback
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // condition ? trueValue : falseValue
  err ? console.error(err) : console.log('Commit logged!')
);
