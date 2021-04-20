const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: `input`,
        name: `team manager's name`,
        message: `Please enter team manager's name:`,
    },
    {
        type: `input`,
        Number: `team manager's employee ID`,
        message: `Please enter Employee ID:`,
    },
    {
        type: `input`,
        email: `team manager's email address`,
        message: `Please enter email address:`,
    },
    {
        type: `input`,
        name: `team manager's office number`,
        message: `Please enter office number`
    },
    {
        type: `list`,
        name: `engineer_intern`,
        message: `choose an engineer or intern for your team:`,
        choices: [`Engineer`, `Intern`],
    },
    {
        type: `input`,
        name: `Engineer_name`,
        message: `Please enter engineer's name:`
    },
    {
        type: `input`,
        name: `Engineer's Employee ID`,
        message: `Please enter engineer's employee ID:`
    },
    {
        type: `input`,
        name: `Engineer's email address`,
        message: `Please enter engineer's email address:`
    },
    {
        type: `input`,
        name: `github username`,
        message: `Please enter engineer's github username:`
    },
    {
        type: `input`,
        name: `Intern's name`,
        message: `Please enter intern's name:`
    },
    {
        type: `input`,
        name: `intern's employee ID`,
        message: `Please enter intern's employee ID:`
    },
    {
        type: `input`,
        name: `intern's email address`,
        message: `Please enter intern's email address:`
    },
    {
        type: `input`,
        name: `intern's school`,
        message: `Please enter intern's school name:`
    }
]