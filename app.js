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
let seenID = {};
//An object to store all of the necesscary input the user provides
let teamTotal = [];


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
    //this will let them choose
    .then(input => {
        switch(input.role) {
            case "Manager":
                enterManager();
                break;
            case "Engineer":
                enterEngineer();
                break;
            case "Intern":
                enterIntern();
                break;
            case "The Team Is Complete":
                render(teamTotal);
                createHtml();
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
    .then(input => {
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber);
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
    .then(input => {
        const engineer = new Engineer(input.name, input.id, input.email, input.github);
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
    .then(input => {
        const intern = new Intern(input.name, input.id, input.email, input.school);
        teamTotal.push(intern);
        addTeamMember();
    })
}

//Section on validating the input
//It will not allow the user to input no value 
function catchEmpty(input){

    if(input===""){
        return "Please enter required information."
    } 
    else{ 
        return true};

}
//This function will not allow the user to input an already used id
function checkId(id){

    if ((seenID[id]) || (id==="")){
      return "This ID is invalid";  
    }

    seenID[id] = true;
    return true; 
}
//Checking that the email is valid
function emailValidate(email){
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
//This will print the output into a pre-designed html format inside of the output file
function createHtml (){
    fs.writeFileSync(outputPath, render(teamTotal), "utf-8");
    console.log("Your Team html has been created. Go to the output folder to see your creation.")
}

addTeamMember();

