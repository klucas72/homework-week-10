// questions for each class and for user to answer
module.exports = {
    pickEmployeeRole: {
        type: `list`,
        message: `Please choose employee Role`,
        name: `employeeRole`,
        choices: [`Manager`, `Engineer`, `Intern`],
    },
    mgrQuestions: [
        {
            type: `input`,
            name: `managerName`,
            message: `Please enter team manager's name:`,
        },
        {
            type: `input`,
            name: `managerID`,
            message: `Please enter Employee ID:`,
        },
        {
            type: `input`,
            name: `managerEmail`,
            message: `Please enter email address:`,
        },
        {
            type: `input`,
            name: `managerNumber`,
            message: `Please enter office number`
        },
    ],
    engQuestions: [
        {
            type: `input`,
            name: `engineerName`,
            message: `Please enter engineer's name:`
        },
        {
            type: `input`,
            name: `engineerID`,
            message: `Please enter engineer's employee ID:`
        },
        {
            type: `input`,
            name: `engineerEmail`,
            message: `Please enter engineer's email address:`
        },
        {
            type: `input`,
            name: `github`,
            message: `Please enter engineer's github username:`
        }
    ],
    internQuestions: [
        {
            type: `input`,
            name: `internName`,
            message: `Please enter intern's name:`
        },
        {
            type: `input`,
            name: `internID`,
            message: `Please enter intern's employee ID:`
        },
        {
            type: `input`,
            name: `internEmail`,
            message: `Please enter intern's email address:`
        },
        {
            type: `input`,
            name: `internSchool`,
            message: `Please enter intern's school name:`
        }
    ],
    repeatQuestion: {
        type: `list`,
        name: `repeatQuestion`,
        message: `Do you want to add another team member?`,
        choices: [`Yes`, `No`]
    }

}