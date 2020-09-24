const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./generateMarkdown");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project!",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Are there any specific instructions to use your project?",
        name: "usage"
    },
    {
        type: "list",
        message: "Select license",
        name: "license",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "Who had helped contribute to this project??",
        name: "contributors"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "test"
    },
    
    {
        type: "input",
        message: "What is your Github username",
        name: "username"
    },

    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
    

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
      });
}

// function to initialize program

function init() {
    inquirer.prompt(questions)
    .then(function(response){
        const markdown = generateMarkdown(response);
        writeToFile(`${response.title}.md`, markdown);
    })
}

// function call to initialize program
init();
