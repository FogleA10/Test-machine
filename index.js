const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const pageTemplate = require("./src/page-template")
const Engineer = require("./lib/Engineer")
const Inter = require("./lib/Intern")
const Manager = require("./lib/Manager")

//If you have any questions, contact me by email at [${data.email}](mailto:${data.email}) or on github at [${data.github}](https://github.com/${data.github}).

var employeeArray = [
    {
        type:"input",
        name:"title",
        message:""

    }

]


.then((data) =>{
    var manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    employeeArray.push(manager)
})
.then((data) => {
    var intern = new Intern(data.name, data.id, data.email, data.school)
    employeeArray.push(intern)
})
.then((data) =>{
    var engineer = new Engineer(data.name, data.id, data.email, data.github)
    employeeArray.push(engineer)
})
.then((data)=> {
    var employee = new Employee( data.name, data.id, data.email)
    employeeArray.push(employee)
})
//inter, engineer