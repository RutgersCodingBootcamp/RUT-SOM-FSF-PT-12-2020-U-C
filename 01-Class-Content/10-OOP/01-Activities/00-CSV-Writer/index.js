// goal 3 ask what the user wants for each field
// goal 4 repeat it until they exit
// goal 5 write it to file
const inquirer = require("inquirer");
const fs = require("fs");

const csvQuestions = [];
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
        console.log(responses);
        let columnout = `"${col1}","${col2}"\n`;
        console.log(columnout);
        saveFile(columnout);
    });
}

function saveFile(data){
    fs.writeFile("output.csv", data, err =>{
        if(err) console.error(err);
    } );
}
askFirstQuestions();