// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

class Engineer extends Employee {
    constructor (github, name, id){
        super (name, id);
        this.github = github
    }
}
module.exports = Engineer;