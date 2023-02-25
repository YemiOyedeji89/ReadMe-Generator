const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const emailValidator = require('email-validator');
/// IMPORTING GENERATE MARKDEOWN FUNCTION
const generateMarkdown = require("./utils/generateMarkdown.js");


/// PROMPT QUESTIONS
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
        message: 'Provide project screenshot Url in the following extention: .jpeg, .jpg or .png',
        
        ///VALIDATING THE IMAGE URL FORMAT AND CAN BE EMPTY OR NULL
        validate: (input) => {
            const allowedExtension = ['.jpeg', '.jpg', '.png'];
            const fileExt = path.extname(input);
            let  isValid = false;
            
            for(const value of allowedExtension){
                if(value === fileExt || fileExt == ""){
                    isValid = true;
                    break;
                }
            }
           if (isValid === false){
            return 'Please enter the correct image url format'
           }else{
            return true
           }
           
        },
        default: 'None'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide license for your project?',
        choices: ['MIT', 'Unlicense', 'Apache 2.0'],
        default: 'None'
    },
    {
        type: 'input',
        name: 'testCode1',
        message: 'Step 1. validation test 1?',
    },
    {
        type: 'input',
        name: 'testCode2',
        message: 'Step 2. validation test 2',
    },
    {
        type: 'input',
        name: 'testCode3',
        message: 'Step 3. validation test 3',
    },
    {
        type: 'input',
        name: 'credits1',
        message: 'Provide links to collaborators to your project?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'credits2',
        message: 'Provide links to documents used for your project?',
    },
    {
        type: 'input',
        name: 'gitHubUrl',
        message: 'Provide gitHub username',
        default: 'None'
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide email address',
        default: 'None',
        validate: (input)=>{
             const emailCheck =  emailValidator.validate(input)
            if(!emailCheck){
                return 'please enter correct email'
            } 
           return true;
        },   
    }
    
])
.then((userInput) => {

    console.log(userInput)

    const fileName = `${userInput.projectName}.md`
    const fileGen = generateMarkdown(userInput)
    writeToFile(fileName, fileGen);
 
});


// function to write README file
function writeToFile(fileName, fileGen) {

    fs.writeFile(fileName, fileGen, (err) => 
    err ? console.log(err): console.log("success!"));
}

