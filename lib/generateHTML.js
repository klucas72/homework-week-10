module.exports = (teamArray) => {
    return `<!DOCTYPE html>
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
    <div id="navbar" class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a id="nav" class="navbar-brand" href="#">Project Team</a>
            </div>
        </nav>
    </div>
    
    <body>
        <section id="section">
        ${generateCard(teamArray)}
        </section>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
    <script src="./index.js" async defer></script>
    
    </html>`
}

function generateCard(teamArray) {
    console.log(teamArray);
    let arrayOfCards = []
    teamArray.forEach(employee => arrayOfCards.push(`<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">${employee.name}</div>
            <div class="card-body text-dark bg-light">
            <h5 class="card-title">${employee.getRole()}</h5>
                <p class="card-text"></p>
                <ul class="list-group list-group-flush">
                ${employee.getRole() === "Manager" ? `<li class="list-group-item">office: ${employee.officeNumber}</li>` : employee.getRole() === "Engineer" ? `<li class="list-group-item">GitHub: ${employee.github}</li>` : `<li class="list-group-item">School: ${employee.school}</li>`}
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">Employee ID: ${employee.id}</li>
                </ul>
              <a href="${employee.email}" class="card-link">${employee.email}</a>
              <a href="${employee.getRole() === "Engineer" ? `https://github.com/${employee.github}` : `N/A`}" class="card-link">github: ${employee.getRole() === "Engineer" ? `${employee.github}` : `N/A`}</a>
            </div>
        </div>`))
    return arrayOfCards.join("")
}