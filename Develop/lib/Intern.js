// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

class Intern extends Employee {
    constructor (name, id, role, school){
        super (name, id);
        this.school = "UCLA"
        this.role = "Intern"
    }
    
    getSchool(){
        return this.school
    }
}




module.exports = Intern;