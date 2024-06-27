const fs = require('fs'); // Importing the Node.js core module file system
const inquirer = require('inquirer'); // Importing inquirer
const generateMarkdown = require('./utils/generateMarkdown'); // Importing the generateMarkdown file
const chalkPromise = import('chalk').then(module => module.default); // Import chalk

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title here:',
        validate: (input) => input ? true : 'Project title is required.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project here:',
        validate: (input) => input ? true : 'Description is required.',
    },
    { 
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions here:',
        validate: (input) => input ? true : 'Installation instructions are required.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information here:',
        validate: (input) => input ? true : 'Usage information is required.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines here:',
        validate: (input) => input ? true : 'Contributing guidelines are required.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions here:',
        validate: (input) => input ? true : 'Test instructions are required.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
        validate: (input) => input ? true : 'Choosing a license is required.',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username here:',
        validate: (input) => input ? true : 'You must enter a GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address here:',
        validate: (input) => input ? true : 'You must enter an email.',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`${fileName} generated successfully!`);
        }
    });
}

// Function to initialize app
async function init() {
    const chalk = await chalkPromise; // Wait for chalk to be imported
    
    // Apply Chalk styling to all question messages
    questions.forEach(question => {
        question.message = chalk.red(question.message);
    });

    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers); // Using the generateMarkdown function
        writeToFile('newREADME.md', readmeContent);
    });
}
// Function call to initialize app
init();
