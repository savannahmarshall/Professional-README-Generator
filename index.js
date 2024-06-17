// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title here:',
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter the description of your project here:",
    },
    { 
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions here:',
    }
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information here:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines here:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions here:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username here:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address here:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
