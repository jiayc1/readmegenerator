const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

const questions = [
{
    type: "input",
    name: "title",
     message: "What is the title of your project?"
 },
 {
    type: "input",
    name: "description",
    message: "Write a Description of the project"
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm run test"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
    {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },{
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
 
  
];

function writeToFile(fileN, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileN), data);
}

function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

init();
