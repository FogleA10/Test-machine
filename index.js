const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const pageTemplate = require("./src/page-template")
const Engineer = require("./lib/Engineer")
const Inter = require("./lib/Intern")
const Manager = require("./lib/Manager");
const createHTMLString = require('./src/page-template');

//If you have any questions, contact me by email at [${data.email}](mailto:${data.email}) or on github at [${data.github}](https://github.com/${data.github}).

var employeeArray = []

const managerQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "Id",
        message: "What is the Manager's Id?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?"
    },
    {
        type:"input",
        name: "email",
        message: " What is your Manager's email?"


    }
    //id, email, office number 
    //what other team mates would you like to add in its own function, keeps asking the same question
    //different quesitons array for the engineer, Intern,finish manager. 
]

async function managerPrompt() {
    var data = await inquirer.prompt(managerQuestions)
    console.log(data);   
         
            var manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            employeeArray.push(manager)
        
}

//managerPrompt()
const choicesQuestions = [
    {
        type: "input",
        name: "newMember",
        message: "Would you like to add another employee team member?"
    },
    {
        type:"list",
        name:"employee",
        message:" What kind of employee would you like to add?",
        choices: ["Intern", "Engineer", "Manager"]

    }//break this and add another inquirer.prompt

]
async function newMember(){
    employeeArray();
}
//need a function to choose what kind of team member i want to add teammember prompt (list)
//could create a loop, after choices, show display choices again
async function choicesPrompt() {
    var data = await inquirer.prompt(choicesQuestions)
    if (data.newMember == "yes"){
        if (data.employee == "Intern"){
            internPrompt()
        }
        if(data.employee=="Engineeer"){
            engineerPrompt()
        }
        if(data.employee == "Manager"){
            managerPrompt()
        }
        
    }else if(data.newMemeber == "no"){
        fs.writeFileSync('./dist', createHTMLString(employeeArray), 'utf-8')
    }
}
    


    
    
    



//choicesPrompt()


const internQuestions = [
    {
        type: "input",
        name: "schoolName",
        message: "What is the school's name?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your name?"
    },
    {
        type: "input",
        name: "Id",
        message: " What is your employees id number?"
    },
    {
        type: "input",
        name: "email",
        message: " What is your employee email?"
    }

]
//internPrompt()
async function internPrompt() {
    var data = await inquirer.prompt(internQuestions)
        
            var intern = new Intern(data.name, data.id, data.email, data.school)
            employeeArray.push(internQuestions)
        
}

const engineerQuestions = [
    {
        type: "input",
        name: "githubUsername",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "Id",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: " What is your employee email?"
    }
]

//link the github in here
async function engineerPrompt() {
    var data = await inquirer.prompt(engineerQuestions)
        
            var engineer = new Engineer(data.name, data.id, data.email, data.github)
            employeeArray.push(engineerQuestions)
        
}
//engineerPrompt()




    //.then((data) => {
       // var employee = new Employee(data.name, data.id, data.email)
        //employeeArray.push(employee)
    //})

//inter, engineer
async function init(){
    await managerPrompt()
    choicesPrompt()
}
init();