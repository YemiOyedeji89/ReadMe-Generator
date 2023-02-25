// function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.projectName} 
  ## Project Description
  ${userInput.PrjDescription}

  ## Table of Contents

  * [Installation](#Installation)
  * [screenShoots](#Usage)
  * [License](#License)
  * [Tests](#Tests)
  * [contribute](#Contributors-Links)
  * [contact](#Questions)
  
  ## Installation
  Run below code to install project dependencies:
  ${userInput.install}

  ## Usage
  
  ${userInput.usage}

  ## License
  ${userInput.license}

  ### Tests
  Step to test validations on the application:
  * ${userInput.testCode1} 
  * ${userInput.testCode2} 
  * ${userInput.testCode3} 
  
  ### Contributors Links
  ![External Docs](${userInput.credits1})

  ![External Docs](${userInput.credits2})
  
  ### Questions
  How to connect with me: 
  * Email : ${userInput.email}
  * GitHub: ![GitHub Repo](${userInput.gitHubUrl})
`
;

}

/// RENDERING THE GENERATE MARKDOWN FUNCTION AVAILABLE TO USE IN OTHER PART OF THE APPLICATION WHEN IMPORTED
module.exports = generateMarkdown;
