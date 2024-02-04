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

  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    None: ''
  };

  const licenseBadge = licenseBadges[answers.license];

  return `
# ${answers.title}
${licenseBadge}

<div style="text-align:center">

![Project Image](${answers.image})

</div>

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
      fs.writeFile('newReadme.md', html, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md file generated successfully!');
        }
      });
    })
}

init();
