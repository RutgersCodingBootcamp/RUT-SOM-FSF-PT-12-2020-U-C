const inquirer = require("inquirer");

console.log(inquirer);

// prompt takes in an array of objects which define our questions
inquirer.prompt([
    {
        // * It's done when the application asks the user, "What is your name?"
        type: "input",
        message: "What is your name?",
        name: "userName"
    },
    {
        type: "checkbox",
        message: "What languages do you know?",
        choices: ["French", "Italian", "Tagalog", "Mandarin", "Korean", "Japanese", "Portuguese", "Spanish"],
        name: "language"
        // * It's done when the application asks the user, "What languages do you know?"
    },
    {
        type: "list",
        message: "What is your preferred method of communication?",
        choices: ["Telepath", "Call", "Smoke signals", "Email", "Text", "Morse", "Carrier Pigeon", "Courier", "Pony express", "Peter"],
        name: "communication"
        // * It's done when the application asks the user, “What is your preferred method of communication?"
    }
]).then( response => {
    console.log(response);
    let languageQuestions = response.language.map(language => {
        return {
            type: "confirm",
            message: `Do you really know ${language}?`,
            name: `${language}confirm`
        };
    });
    inquirer.prompt(languageQuestions).then( ans => console.log(ans));
});

