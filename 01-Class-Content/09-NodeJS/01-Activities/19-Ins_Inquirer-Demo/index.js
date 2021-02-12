const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
    {
      type: 'list',
      message: 'Choose the random animal: ',
      choices: ["Parrot", "Aligator", "Dog", "Anteater", "Penguin", "Peter"],
      name: 'animal',
    },
    {
      type: 'list',
      message: 'Choose the section you want to add next to the file: ',
      choices: ["Installation"],
      name: 'section'
    }
  ])
  .then((response) =>{
    console.log(response);
    if(response.animal === "Peter"){
      console.log("You have chosen the correct animal!!");
    }
    if(response.section === "Installation"){
      // * [Installation](#installation)
      fs.writeFile("file.txt", "* [Installation](#installation)", (err) => {
        if(err) console.error(err);
        console.log("Written to file...");
      });
    }

    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  });
