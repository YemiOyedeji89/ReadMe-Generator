// function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${(userInput.projectName).trim()} 
  ## Project Description
  ${(userInput.PrjDescription).trim()}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Tests](#Tests)
  * [Contribute](#Contributors-Links)
  * [Contact](#Questions)
  
  ## Installation
  Run below code to install project dependencies:
  ${(userInput.install).trim()}

  ## Usage
  
  ${userInput.usage}

  ## License
  ${userInput.license}

  ## Tests
  Validation test scenarios:
  * ${(userInput.testCode1).trim()} 
  * ${(userInput.testCode2).trim()} 
  * ${(userInput.testCode3).trim()} 
  
  ## Contributors Links
  ![${(userInput.credits1Name).trim()}](${(userInput.credits1).trim()})


  ![${(userInput.credits2Name).trim()}](${(userInput.credits2).trim()})
  
  ### Questions
  How to connect with me: 
  * Email : ${(userInput.email).trim()}
  * GitHub: ![GitHub page](${(userInput.gitHubUrl).trim()})
`
;

}

/// RENDERING THE GENERATE MARKDOWN FUNCTION AVAILABLE TO USE IN OTHER PART OF THE APPLICATION WHEN IMPORTED
module.exports = generateMarkdown;
