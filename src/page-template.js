//make html string 
//copy all in html and put it in here in strign thng 
//like markdown email and github do herere

function githubLink(data) {
    return`
    `
    
    //create a tag${link}
}

const generateTeam = (team) => {
    console.log(team);

    const newTeamMembersArr = team.map(member => {
        console.log(member) 
         {
             name: "Tammer"
             role: "Engineer"
         }
        { 
            name: "Alec"
            role: "Employee"

        }
        {
            name: "John"
            role: "Intern"

        }
        {
            name: "David"
            role: "Manager"
        }
        return `
            <div class="card">
                ${member.name}
                ${member.role}
            </div>
        `
    });

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