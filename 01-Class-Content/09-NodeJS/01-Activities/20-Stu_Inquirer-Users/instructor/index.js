const inquirer = require("inquirer");

// console.log(inquirer);
inquirer.prompt([
    // {
    //     type: "input",
    //     message: "test",
    //     name: "myName"
    // }
//     * It's done when the application asks the user, "What is your name?"
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
  
    // * It's done when the application asks the user, "What languages do you know?"
    {
        type: "checkbox",
        message: "What languages do you know?",
        choices: ["French", "Alien", "Klingon"],
        name: "language"
    },
    // * It's done when the application asks the user, “What is your preferred method of communication?"
    {
        type: "list",
        message: "What is your preferred of communication?",
        choices: ["Telepathy", "Teleportation", "Talking", "Peter"],
        name: "communication"
    }
]).then( answers => {
    console.log(answers);
})