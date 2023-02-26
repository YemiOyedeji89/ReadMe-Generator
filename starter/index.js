const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const emailValidator = require('email-validator');
/// IMPORTING GENERATE MARKDEOWN FUNCTION
const generateMarkdown = require("./utils/generateMarkdown.js");
const validator = require('validator');


/// PROMPT QUESTIONS
inquirer
.prompt([
    {   ///PROJECT TITLE 
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
    {   ///PROJECT DESCRIPTION
        type: 'input',
        name: 'PrjDescription',
        message: 'Write a short description of the project',
        validate: (input) => {
            if(!input){
                return 'Please enter a brief description'
            }
            else{ 
                return true;
            }
        }
    },
    {   ///DEPENDENCY
        type: 'input',
        name: 'install',
        message: 'What command to run any dependencies?',
        default: 'None'
    },
    {   ///APPLICATION SCREENSHOT
        type: 'input',
        name: 'usage',
        message: 'Provide project screenshot Url in the following extention: .jpeg, .jpg or .png',
        
        ///VALIDATING THE IMAGE URL FORMAT AND CAN BE EMPTY OR NULL
        validate: (input) => {
            const allowedExtension = ['.jpeg', '.jpg', '.png'];
            const fileExt = path.extname(input);
            let  isValid = false;
            
            for(const value of allowedExtension){
                if(value === fileExt || input == ''){
                    isValid = true;
                    break;
                }
            }
           if (isValid === false){
            return 'Please enter the correct image url format'
           }else{
            isValid = true
            return isValid
           }
           
        },
        default: ''
    },
    {   ///LICENCE
        type: 'list',
        name: 'license',
        message: 'Provide license for your project?',
        choices: ['None', 'MIT', 'Unlicense', 'Apache 2.0'],
    },
    {   ///VALIDATION TEST SCENARIO 1
        type: 'input',
        name: 'testCode1',
        message: 'Application validation test scenario 1',
        default: 'None'
    },
    {   ///VALIDATION TEST SCENARIO 2
        type: 'input',
        name: 'testCode2',
        message: 'Application validation test scenario 2',
        default: 'None'
    },
    {   ///VALIDATION TEST SCENARIO 3
        type: 'input',
        name: 'testCode3',
        message: 'Application validation test scenario 3',
        default: 'None'
    },
    {   ///COLLABORATOR NAME
        type: 'input',
        name: 'credits1Name',
        message: 'Provide name of a collaborator to your project: ',
        default: 'Helper'
    },
    { ////VALIDATION FOR COLLABORATOR URL IF PROVIDED
        type: 'input',
        name: 'credits1',
        message: `Provide collaborator's URL: `,
        validate: (input)=> {

            let isValid;

            if(input !== 'None'){
             isValid = validateUrl(input, isValid);
            }
  
            if (isValid === false){
              return 'please enter valid url'
            }else{
              return true
            } 
        },
        default: 'None'
    },
    {   ///EXTERNAL SOURCE NAME
        type: 'input',
        name: 'credits2Name',
        message: 'Name of external source used for your project:',
        default: 'External Doc'
    },
    {   ///EXTERNAL SOURCE URL IF PROVIDEED
        type: 'input',
        name: 'credits2',
        message: 'Provide url to the external source used for your project:',
        validate: (input)=>{

            let isValid;

            if(input !== ""){
                isValid = validateUrl(input, isValid);
            }
  
            if (isValid === false){
             return 'please enter valid url'
            }else{
              return true
            }  
        },
        default: ''
    },
    {///VALIDATION FOR GITHUB URL IF PROVIDED
        type: 'input',
        name: 'gitHubUrl',
        message: 'Provide your gitHub url',
        validate: (input) =>{

         let isValid;
             
            if(input !== "None"){
              isValid = validateUrl(input, isValid);
            }

            if (isValid === false){
            return 'please enter valid url or type "None"'
            }else{
            return true
            }  
        },
        default: 'None'
        
    },
    {///VALIDATION FOR MANDATORY EMAIL
        type: 'input',
        name: 'email',
        message: 'Provide email address',
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

    const fileName = `./generatedReadme/${userInput.projectName}.md`
    
    const fileGen = generateMarkdown(userInput)
    writeToFile(fileName, fileGen);

});

///FUNCTION TO VALIDATE URL INPUT
function validateUrl(input, isValid){
   
    const validUrl = validator.isURL(input, {
        protocols: ['http', 'https'],
        require_protocol: true
    });

    if(!validUrl){
       isValid = false
    }
    return isValid;       
};


// FUNCTION TO WRITE README FILE
function writeToFile(fileName, fileGen) {

    fs.writeFile(fileName, fileGen, (err) => 
    err ? console.log(err): console.log("success!"));
};