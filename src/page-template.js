//make html string 
//copy all in html and put it in here in strign thng 
//like markdown email and github do herere



const generateTeam = (team) => {
    console.log(team);


    const generateManager = manager => {
        return `
        <article id="manager" class="card" style="width: 18rem;">
            <div class="manager-bio card-title">
                <h1 id="title">${manager.getName()}</h1>
                <h3>Manager</h3>
            </div>
            <p class="card-text"> Id: ${manager.getId()}</p>
            <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
        </article>`
    }
    const generateIntern = intern => {
        return`
    
            <article id="intern" class="card" style="width: 18rem;">
                <div class="manager-bio card-title">
                    <h1 id="title">${intern.getName()}</h1>
                    <h3>Intern</h3>
                </div>
                <p class="card-text"> Id: ${intern.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="card-text">School: ${intern.getSchool()}</p>
            </article>`
    }
    const generateEngineer = engineer => {
        return `
        <article id="engineer" class="card" style="width: 18rem;">
            <div class="manager-bio card-title">
                <h1 id="title">${engineer.getName()}</h1>
                <h3>Engineer</h3>
            </div>
            <p class="card-text">Id: ${engineer.getId()}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="card-text">Github: <a
            href="http://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </article>`
    }

    const newTeamMembersArr = []
    newTeamMembersArr.push(team.filter(employee => employee.getRole()==="Manager")
       .map(manager => generateManager(manager)).join(''));

       newTeamMembersArr.push(team.filter(employee => employee.getRole()==="Intern")
       .map(intern => generateIntern(intern)).join(''));

       newTeamMembersArr.push(team.filter(employee => employee.getRole()==="Engineer")
       .map(engineer => generateEngineer(engineer)).join(''));
       


    // const newTeamMembersArr = team.map(member => {
    //     console.log(member) 
    //      {
    //          name: "Tammer"
    //          role: "Engineer"
    //      }
    //     { 
    //         name: "Alec"
    //         role: "Employee"

    //     }
    //     {
    //         name: "John"
    //         role: "Intern"

    //     }
    //     {
    //         name: "David"
    //         role: "Manager"
    //     }
    //     return `
    //         <div class="card">
    //             ${member.name}
    //             ${member.role}
                
    //         </div>
    //     `
    // });

    return newTeamMembersArr.join("");

};
//generateTeam is the final step, produce a c

const createHTMLString = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
    
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./styles.css" />
    </head>
    
    
    <body>
        <header class="hero"> My Team</header>
    
        ${generateTeam(team)}
        
    </body>
    
    </html>`
}

module.exports = createHTMLString;