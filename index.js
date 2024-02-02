const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: 'input',
    message: 'What is the Title of the Project?',
    name: 'title',
  },

  {
    type: 'input',
    message: 'Path to the Project Image:',
    name: 'image',
  },

  {
    type: 'input',
    message: 'Description of the Project:',
    name: 'description',
  },

  {
    type: 'input',
    message: 'Installation instructions:',
    name: 'installation',
  },

  {
    type: 'input',
    message: 'Contribution guidelines:',
    name: 'contribution',
  },

  {
    type: 'input',
    message: 'Usage information:',
    name: 'usage',
  },

  {
    type: 'list',
    message: 'Choose a license for your project:',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },

  {
    type: 'input',
    message: 'Test instructions:',
    name: 'test',
  },

  {
    type: 'input',
    message: 'GitHub username:',
    name: 'username',
  },

  {
    type: 'input',
    message: 'Email address:',
    name: 'email',
  }
];

function promptUser() {
  return inquirer.prompt(questions);
}

function generateMarkdown(answers) {
  return `
# ${answers.title}

![Project Image](${answers.image})

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.test}

## License
This project is licensed under the ${answers.license} License.

## Questions
For questions about this project, please reach out to [@${answers.username}](https://github.com/${answers.username}) or contact ${answers.email}.
`;
}

function init() {
  promptUser()
    .then((answers) => {
      const html = generateMarkdown(answers);
      fs.writeFile('README.md', html, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md file generated successfully!');
        }
      });
    })
}

init();
