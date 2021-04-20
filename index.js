const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const manager = [
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
]
const enineer = [
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
    }
]

const intern = [
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

function generateHTML(answers) {
    `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Project Team</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="../assets/style.css">
    </head>
    <div id=navbar class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a id=nav class="navbar-brand" href="#">Project Team</a>
            </div>
        </nav>
    </div>
    
    <body>
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body text-dark bg-light">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" class="card-link">Card link</a>
            </div>
        </div>
    
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
    <script src="./assets/index.js" async defer></script>
    
    </html>`
}