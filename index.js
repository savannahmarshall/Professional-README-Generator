// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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

const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    None: '',
};

// function to generate readme answers 
function generateReadme(answers) {
    const licenseBadge = licenseBadges[answers.license];
    const licenseSection = answers.license === 'None' 
        ? 'This project is not licensed.' 
        : `This project is licensed under the ${answers.license} license.`;
    
    const readmeContent = `# ${answers.projectTitle}

${licenseBadge}

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
${licenseSection}

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

// function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('newREADME.md', readmeContent);
    });
}

// function call to initialize app
init();
