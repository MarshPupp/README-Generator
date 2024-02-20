//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Tell me a brief description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How do you test your application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Does your project have any additional features?',
        name: 'features',
    },
    {
        type: 'input',
        message: 'How can another user contribute to your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Any resources and/or Contributors that you would like to mention?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What is the link to your GitHub page?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'and finally, What license are you using for you application?',
        name: 'license',
        choices: ['MIT', 'GNU GPL v3', 'BSD 3-Clause', 'Apache 2.0', 'N/A']
    },
];

// TODO: Create a function to write README file
function writeToFile(response) {
    let markdown = generateMarkdown(response);

    if (!fs.existsSync(',/readMes')){
        fs.mkdirSync('./readMes');
    }

    fs.writeFile('./readMes/ReadME.md', markdown, (err) =>{
        if (err) {
            console.error('Error creating file: ', err);
        } else {
            console.log('Read me file created successfully');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log('Generating README...');
        writeToFile(response);
    })
}
// Function call to initialize app
init();