const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//variable to place id's inside and verify to make sure they are unique
const seenID = {};
const teamTotal = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
addTeamMember();
//An object to store all of the necesscary input the user provides
teamTotal = [];

// Check to see what kind of team member they want to add
function addTeamMember (){
    console.log("----------");
    console.log("Let's build out your team!");
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What role does this team member fulfill?",
            choices: ["Manager", "Engineer", "Intern", "The Team Is Complete"],
        }
    ])
    .then(response => {
        switch(response.role) {
            case "Manager":
                enterManager();
                break;
            case "Engineer":
                enterEngineer();
                break;
            case "Intern":
                enterIntern();
                break;
            case "I do not want to add any more team members":
                render(teamTotal);
                createHtml();
                break;
        }
    })
}

//function for input of manager
function enterManager (){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your team's manager",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "id",
            message: "what is their employee id?",
            validate: checkId
            
        },
        {
            type: "input",
            name: "email",
            message: "what is their work email?",
            validate: emailValidate
        },
        {
            type: "input",
            name: "officeNumber",
            message: "what is their office number?",
            validate: catchEmpty
        }

    ]) 
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamTotal.push(manager);
        addTeamMember();
    })
}

//function for input of engineer
function enterEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "id",
            message: "what is their employee id?",
            validate: checkId 
        },
        {
            type: "input",
            name: "email",
            message: "what is their work email?",
            validate: emailValidate
        },
        {
            type: "input",
            name: "github",
            message: "what is their Github username?",
            validate: catchEmpty
        }
    ])
    .then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamTotal.push(engineer);
        addTeamMember();
    })
}
//function for input of intern
function enterIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "id",
            message: "what is their employee id?",
            validate: checkId
        },
        {
            type: "input",
            name: "email",
            message: "what is their work email?",
            validate: emailValidate
        },
        {
            type: "input",
            name: "school",
            message: "what school is their alma mater?",
            validate: catchEmpty
        }
    ])
    .then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        teamTotal.push(intern);
        addTeamMember();
    })
}

//Section on validating the input
//It will not allow the user to input no value 
function catchEmpty(value){

    if(value===""){
        return "Please enter required information."
    } 
    else{ 
        return true};

}
//It will not allow the user to input an already used id
function checkId(id){

    if ((seenID[id]) || (id==="")){
      return "This ID belongs to another employee.";  
    }

    seenID[id] = true;
    return true;
    
}
//Checking that the email is valid
function emailValidate(email){
    // if(email===""){
    //     return "Please enter required information."
    // } 
    const emailCorrect = /\S+@\S+\.\S+/;
    if((email.charAt(0)===".")||(email==="")){
        return "your email is invalid"    
    }
    else if(email.match(emailCorrect)){
        return true
    }
    else{
        return "your email is invalid"
    }

}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
