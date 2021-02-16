// goal 3 ask what the user wants for each field
// goal 4 repeat it until they exit
// goal 5 write it to file
const inquirer = require("inquirer");
const fs = require("fs");

const csvQuestions = [];
function UserQuestion(question, dataName){
    this.message = question;
    this.type = "input";
    this.name = dataName;
};
let columnout;
let fileData = "";
// { 
//    type: "input",
//    message: "",
//    name: ""
// }
// goal 1 ask what the two questions are for the CSV
// goal 2 ask what the two field names are for the CSV

function askFirstQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your first question?",
            name: "quest1"
        },
        {
            type: "input",
            message: "What is your first column name?",
            name: "col1"
        },
        {
            type: "input",
            message: "What is your second question?",
            name: "quest2"
        },
        {
            type: "input",
            message: "What is your second column name?",
            name: "col2"
        }

    ]).then( responses => {
        const {quest1, col1, quest2, col2} = responses;
        // console.log(responses);
        columnout = `"${col1}","${col2}"\n`;
        // console.log(columnout);
        // saveFile(columnout);
        let userQuestionsArr = [];

        userQuestionsArr.push(new UserQuestion(quest1, "data1"));
        userQuestionsArr.push(new UserQuestion(quest2, "data2"));
        // userQuestionsArr.push({
        //     type: "input",
        //     message: quest1,
        //     name: "data1"
        // });

        // userQuestionsArr.push({
        //     type: "input",
        //     message: quest2,
        //     name: "data2"
        // });
        // console.log(userQuestionsArr);
        askUserQuestions(userQuestionsArr);
    });
}

function askUserQuestions(userQuestionsArr){
    inquirer.prompt(userQuestionsArr)
    .then(responses => {
        // console.log(responses);
        const {data1, data2} = responses;
        fileData += `"${data1}","${data2}"\n`;

        // saveFile(columnout + fileData);

        askUserIfDone(userQuestionsArr);
    });
}
function askUserIfDone(userQuestionsArr){
    inquirer.prompt([
        {
            type:"confirm",
            message: "Are you done?",
            name: "completed"
        }
    ])
    .then(responses => {
        // console.log(responses);
        const {completed} = responses;
        // if completed is true... save
        if(completed){
            saveFile(columnout + fileData);
        }
        else{
            // else 
            askUserQuestions(userQuestionsArr)
        }
    });
}


function saveFile(data){
    fs.writeFile("output.csv", data, err =>{
        if(err) console.error(err);
        console.log("File Written");
    } );
}
askFirstQuestions();