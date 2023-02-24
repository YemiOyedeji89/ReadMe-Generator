const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const emailValidator = require('email-validator');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
/* const questions = [
    

]; */

inquirer
.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your Project title?',
        validate: (input) => {
            if(!input){
                return 'Please enter a project name'
            }
            else{ 
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'PrjDescription',
        message: 'Write a short description of the project',
        validate: (input) => {
            if(!input){
                return 'Please enter a description'
            }
            else{ 
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command to run any dependencies?',
        default: 'None'
         
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide screenshot URL?',
        default: 'None'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide License for your project?',
        choices: ['MIT', 'Unlicense', 'Apache 2.0'],
        default: 'None'
    },
    {
        type: 'input',
        name: 'credits1',
        message: 'Provide Links to collaborators for your project?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'credits2',
        message: 'Provide Links to collaborators for your project?',
    },
    {
        type: 'input',
        name: 'question1',
        message: 'Provide gitHub username',
        default: 'None'
        
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Provide email address',
        validate: (input)=>{
            const emailCheck =  emailValidator.validate(input)
            //emailValidator.validate('test@email.com')
            if(!emailCheck){
                return 'please enter correct email'
            }
           return true;
        } 
    }
    
])
.then((userInput) => {

    console.log(userInput)
     
});


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
