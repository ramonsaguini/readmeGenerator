const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: 'input',
    message: 'What is the Title Job?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the Title Job?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the Title Job?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the Title Job?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the Title Job?',
    name: 'title',
  },
];

function promptUser() {
  return inquirer.prompt(questions);
}

function generateHTML(answers) {
  return `
# ${answers.title}
## ${answers.title} 
### ${answers.language}
#### ${answers.communicationType}
`;
}


function init() {
  promptUser()
    .then((answers) => {
      const html = generateHTML(answers);
      fs.writeFile('readME.md', html, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('HTML file generated successfully!');
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

init();
