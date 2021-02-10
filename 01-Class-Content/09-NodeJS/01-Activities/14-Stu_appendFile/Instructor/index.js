// TODO: What are we importing?
// fs means file system module
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// (0) the file that we will append to
// (1) data that you want to put in , \n means endline character
// (2) the callback describes what to do after the appendFile is finished
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  //  condition ? trueValue: falseValue
  // if there is an err... console.error the error, otherwise "Commit logged!"
  err ? console.error(err) : console.log('Commit logged!')
);
