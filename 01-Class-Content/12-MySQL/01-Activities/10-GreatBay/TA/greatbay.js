const inquirer = require("inquirer");
const mysql = require("mysql");

// connect to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "greatbay_db",
});

connection.connect((err) => {
  if (err) throw err;
  askFirstQuestions();
});

function askFirstQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want to do at the memorabilia auction site?",
        name: "choice",
        choices: ["POST", "BID", "EXIT"],
      },
    ])
    .then((answers) => {
      const { choice } = answers;
      if (choice === "POST") {
        askPostQuestions();
      } else if (choice === "BID") {
        getAuctionList();
      } else {
        connection.end();
        console.log("Goodbye");
      }
    });
}

const validateBid = (input) => {
  if (isNaN(input)) {
    return "Please input a real number, sir/madam.";
  } else {
    return true;
  }
};

function askPostQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What are you selling?",
        validate: (input) => {
          if (input.trim().length < 5) {
            return "Please input a name great than 5 characters.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "bid",
        message: "How much is the starting bid?",
        validate: validateBid,
      },
    ])
    .then((answers) => {
      answers.bid = parseInt(answers.bid);
      console.log(answers);
      insertPostData(answers);
    });
}

function insertPostData(data) {
  connection.query("INSERT INTO memorabilia SET ?", data, (err) => {
    if (err) throw err;
    console.log("Auction created");
    askFirstQuestions();
  });
}

function getAuctionList() {
  connection.query("SELECT * FROM memorabilia", (err, results) => {
    if (err) throw err;
    askBidQuestions(results);
  });
}

function askBidQuestions(choices) {
  console.log(choices);
  inquirer
    .prompt([
      {
        type: "list",
        message: "What auction would you like to bid on?",
        name: "chosen",
        choices: choices,
      },
      {
        type: "input",
        message: "What is your bid?",
        name: "bid",
        validate: validateBid,
      },
    ])
    .then((answers) => {
      console.log(answers);
      let {chosen, bid} = answers;
      bid = parseInt(bid);
      if (bid < chosen.bid) {
        console.log("Sorry bid was not completed, please kindly try again.");
      } else {
        placeBid(chosen, bid);
      }
    });
}

function updateBid(chosen, bid) {
  const setValue = { bid: bid };
  const whereValue = { id: chosen.id };
  connection.query(
    "UPDATE memorabillia SET ? WHERE ?",
    [setValue, whereValue],
    (err) => {
      if (err) throw err;
      console.log("Bid updated.");
      askFirstQuestions();
    }
  );
}
