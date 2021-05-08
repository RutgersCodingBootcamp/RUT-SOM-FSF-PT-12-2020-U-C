const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name?",
    },
    {
      type: "list",
      name: "language",
      message: "What languages do you know?",
      choices: ["HTML", "CSS", "JavaScript"],
    },
    {
      type: "checkbox",
      name: "communication",
      message: "What is your preferred method of communication?",
      choices: ["email", "phone", "text"],
    },
    {
      type: "confirm",
      name: "lastquestion",
      message: "Is that your last question?",
    },
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile(
      "inquirer-activity.txt",
      JSON.stringify(data, null, "\t"),
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  });

// * It's done after I have written those responses to a file.
