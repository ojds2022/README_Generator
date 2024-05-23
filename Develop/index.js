const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    "What is the app's title?",
    "Give a discrption of the app.",
    "What are the installation instructions?",
    "How do you use this app?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "What license are you using?",
    "What is your github username?",
    "What is your email?",
];

async function writeToFile(fileName) { // function that writes README file
    const responses = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: `${questions[0]}`
        },
        {
            type: 'input',
            name: 'description',
            message: `${questions[1]}`
        },
        {
            type: 'input',
            name: 'installation',
            message: `${questions[2]}`
        },
        {
            type: 'input',
            name: 'usage',
            message: `${questions[3]}`
        },
        {
            type: 'input',
            name: 'contribution',
            message: `${questions[4]}`
        },
        {
            type: 'input',
            name: 'tests',
            message: `${questions[5]}`
        },
        {
            type: 'list',
            name: 'license',
            message: `${questions[6]}`,
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'Open Database License', 'Mozilla Public License 2.0', 'GNU Affero General Public License 3.0', 'None']
        },
        {
            type: 'input',
            name: 'username',
            message: `${questions[7]}`
        },
        {
            type: 'input',
            name: 'email',
            message: `${questions[8]}`
        }
    ]);

    const data = generateMarkdown(responses);

    try {
        await fs.writeFile(fileName, data, 'utf8');
        console.log(`Successfully created ${fileName}!`);
    } catch (err) {
        console.error(err);
    }
}

function init() {
    writeToFile('README.md');
}

init();
