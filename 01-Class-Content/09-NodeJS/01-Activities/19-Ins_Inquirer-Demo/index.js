const inquirer = require('inquirer');

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
  ])
  .then((response) =>{
    console.log(response);
    if(response.animal === "Peter"){
      console.log("You have chosen the correct animal!!");
    }

    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  });
