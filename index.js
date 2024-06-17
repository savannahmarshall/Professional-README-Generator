// Packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');

// Array of questions for user input
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
    },
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

const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    None: '',
};

// function to generate readme answers 
function generateReadme(answers) {
    const readmeContent = `# ${answers.projectTitle}

${licenseBadges[answers.license]}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [github.com/${answers.githubUsername}](https://github.com/${answers.githubUsername}).
`;

return readmeContent;
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`${fileName} generated successfully!`);
        }
    });
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
    });
}

// function call to initialize app
init();

