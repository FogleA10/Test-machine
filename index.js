const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const pageTemplate = require("./src/page-template")
const Engineer = require("./lib/Engineer")
const Inter = require("./lib/Intern")
const Manager = require("./lib/Manager")

//If you have any questions, contact me by email at [${data.email}](mailto:${data.email}) or on github at [${data.github}](https://github.com/${data.github}).

var employeeArray = []
const managerQuestions = [
    {
        type:"input",
        name: "title",
        message:"What is the manager's name?"
    },
    {
        type:"input",
        name: "title",
        message: "What is the Manager's Id?"
    },
    {
        type:"input",
        name:"title",
        message: "What is the Manager's office number?"
    }
    //id, email, office number 
    //what other team mates would you like to add in its own function, keeps asking the same question
    //different quesitons array for the engineer, Intern,finish manager. 
]
function managerPrompt(){
    inquirer.prompt(managerQuestions)
    .then((data) =>{
        var manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employeeArray.push(manager)
    })    
}
managerQuestions()

//could create a loop, after choices, show display choices again
function choicesPrompt(){
    inquirer.prompt(choicesQuestions)
    .then((data)=>{
        var choice = new choice (data.name, data.id, data.email)
        employeeArray.push(choicesQuestions)
    })
}
choicesQuestions()
const choicesQuestions =[
    { type:"input",
    name:"title",
    message:"Would you like to add another employee team member?"

},
]


function internPrompt(){
inquirer.prompt(internQuestions)
.then((data) => {
    var intern = new intern(data.name, data.id, data.email, data.school)
    employeeArray.push(internQuestions)
})
}
internQuestions()
const internQuestions = [
    {
        type:"input",
        name:"title",
        message:"What is the school's name?"
    },
    {
        type:"input",
        name:"title",
        message:"what is your name?"
    },
    {
        type:"input",
        name:"title",
        message:" What is your employees id number?"
    },

]


//link the github in here
function engineerPrompt(){
    inquirer.prompt(engineerQuestions)
.then((data) =>{
    var engineer = new Engineer(data.name, data.id, data.email, data.github)
    employeeArray.push(engineerQuestions)
})
}
engineerQuestions()
const engineerQuestions = [
    {type:"input",
    name:"title",
    message:"What is your github username?"
    }
]



.then((data)=> {
    var employee = new Employee( data.name, data.id, data.email)
    employeeArray.push(employee)
})

//inter, engineer