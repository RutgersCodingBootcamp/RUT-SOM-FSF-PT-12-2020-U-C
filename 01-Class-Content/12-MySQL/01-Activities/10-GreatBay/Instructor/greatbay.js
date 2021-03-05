const inquirer = require("inquirer");
const mysql = require("mysql");

const validateBid = input => {
    if(isNaN(parseInt(input))){
        return "Please input a real number, sir/madam."
    }
    else{
        // valid input
        return true;
    }
}


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
    // ask the user some questions "POST" or "BID"
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
        // if they select post... run the post function...
        if(choice === "POST"){
            askPostQuestions();
        }
        // if they select bid... run the getAuctionList function which will then run bid function...
        else if(choice === "BID"){
            getAuctionList();
        }
        // if they exit... end the connection and return or exit the program
        else{
            connection.end();
            console.log("Goodbye");
        }
    });



}

// *** post function


function askPostQuestions(){
    inquirer.prompt([
        {
            // what are you selling?
            type: "input",
            name: "name",
            message: "What are you selling?",
            validate: input => {
                if(input.trim().length <= 5){
                    return "Please input a name greater than 5 characters."
                }
                else{
                    return true;
                }
            }
        },
        {
            // how much is the starting bid?
            type: "input",
            name: "bid",
            message: "How much is the starting bid?",
            validate: validateBid
        }
    ])
    .then( answers => {
        answers.bid = parseInt(answers.bid);
        // console.log(answers);
        // insert a record using that data
        insertPostData(answers);
    });
}
// data === "sisco"
function insertPostData(data){
    // console.log(data);
    connection.query("INSERT memorabilia SET ?", data, err => {
        if(err) return console.error(err);
        console.log("Auction created.");
        // recursively call the first question function again!
        askFirstQuestions();
    });
}

function getAuctionList(){
    // *** getAuctionList function
    connection.query("SELECT * FROM memorabilia", (err, results) => {
        if(err) return console.error(err);
        // console.log(results);
        askBidQuestions(results);
    });
    // query but with a select

    // got a list of bids, 
}

// *** bid function
function askBidQuestions(choices){
    // console.log(choices);
    // transforms choices into an array that has objects with a name and value
    choices = choices.map(dbData => {
        return { name: dbData.name + "(" + dbData.bid + ")", value: {...dbData}};
    });
    // and then ask the user which one to bid on
    inquirer.prompt([
        {
            type: "list",
            message: "What auction would you like to bid on?",
            name: "chosen",
            choices: choices
        },
        // what is your bid?
        {
            type: "input",
            message: "What is your bid?",
            name: "bid",
            validate: validateBid
        }
    ])
    .then(answers => {
        // console.log(answers);
        let {chosen, bid} = answers;
        bid = parseInt(bid);
        // if the bid the bid is too low... sorry bid was not completed, work harder!
        if(bid < chosen.bid){
            console.log("Sorry bid was not completed, please kindly try again.");
            // recursively call the first question function again!
            askFirstQuestions();
        }
        else{
            // else place the bid
            updateBid(chosen, bid);
        }
    })

    
}



// *** updateBid function
function updateBid(chosen, bid){
    const setValue = { bid };
    const whereValue = { id: chosen.id }
    connection.query("UPDATE memorabilia SET ? WHERE ?", [setValue, whereValue], err => {
        if(err) return console.error(err);
        console.log("Bid updated");
        // recursively call the first question function again!
        askFirstQuestions();
    });
}


