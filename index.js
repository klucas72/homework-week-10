const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { mgrQuestions, pickEmployeeRole, engQuestions, internQuestions, repeatQuestion } = require('./lib/questions');
const generateHTML = require('./lib/generateHTML');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

let teamArray = [];

// function init() {
teamMember();
//asks questions for each team member and stored in teamArray
function teamMember() {
    inquirer.prompt(pickEmployeeRole).then((data) => {
        console.log(data.employeeRole);
        if (data.employeeRole === `Manager`) {
            inquirer.prompt(mgrQuestions).then(mgrAnswers => {
                teamArray.push(mgrAnswers)
                repeatQuestionFunc()
            });
        }
        else if (data.employeeRole === `Engineer`) {
            inquirer.prompt(engQuestions).then(engAnswers => {
                teamArray.push(engAnswers)
                repeatQuestionFunc()
            });
        }
        else if (data.employeeRole === `Intern`) {
            inquirer.prompt(internQuestions).then(intAnswers => {
                teamArray.push(intAnswers)
                repeatQuestionFunc()
            });
        };
    })
}
// repeat question function to loop through employees again
function repeatQuestionFunc() {
    inquirer.prompt(repeatQuestion).then(data => {
        if (data.repeatQuestion === `Yes`) {
            teamMember();
        }
        else {
            // console.log("generateHTML functions hould run")
            fs.writeFileSync(outputPath, generateHTML(teamArray), `utf-8`)
        }
    })

}

// createHTML();
// addMember();
// }


// function createHtml(teamArray) {
//     generateHTML();
//     for (const member of teamArray) {
//         addHtml(member);
//     }
//     finishHtml();
// }


// function addHtml(teamMember) {
//     return new Promise(function (resolve, reject) {
//         const name = teamArray.name
//         const role = teamArray.
//     })
// }
// init();