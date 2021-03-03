const inquirer = require("inquirer");
const mysql = require("mysql");

// connect to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    port: 3306,
    database: "greatbay_db"
});

connection.connect( (err) => {
    if(err) throw err;
    askFirstQuestions();
});

function askFirstQuestions(){
    // console.log("does this work");
    // *** askFirstQuestions
    inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do at the memorabilia auction site?",
            name: "choice",
            choices: ["POST", "BID", "EXIT"]
        }
    ])
    .then( answers => {
        const {choice} = answers;
        if(choice === "POST"){
            // ...
        }
        else if(choice === "BID"){
            // ...
        }
        else{
            connection.end();
            console.log("Goodbye");
        }
    });
    // ask the user some questions "POST" or "BID"

    // if they select post... run the post function...

    // if they select bid... run the bid function...

    // if they exit... end the connection and return or exit the program
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

