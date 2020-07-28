// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

class Intern extends Employee {
    constructor (name, id, school){
        super (name, id);
        this.school = "UCLA"
    }
    
    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    };
}




module.exports = Intern;