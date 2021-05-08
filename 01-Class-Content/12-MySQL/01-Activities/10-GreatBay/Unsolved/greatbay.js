const inquirer = require("inquirer");
const mysql = require("mysql");

// connect to the database
const connnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "greatbay2_db"
})

connnection.connect((err) => {
    if (err) throw err;
    console.log("connection id: " + connnection.threadId);
    askFirstQuestion();
})
// ask the user some questions "POST" or "BID"
function askFirstQuestion() {
    console.log("Does this work");
    inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do at the memorabilia auction site?",
            name: "choice",
            choices: ["POST","BID","EXIT"]
        }
    ]).then(answers => {
        const {choice} = answers;
        console.log(choice);
        if (choice == "POST") {
            // ...
        } else if (choice == "BID") {
            // ...
        } else {
            console.log("Goodbye!");
            connnection.end();
        }
    });

// if they select post... run the post function...

// if they select bid... run the bid function...
}
// *** post function
// what are you selling?
// how much is the starting bid?
// insert a record using that data


// *** bid function
// got a list of bids, and then ask the user which one to bid on
// what is your bid?
// if the bid the bid is too low... sorry bid was not completed, work harder!
// else place the bid and update the bid