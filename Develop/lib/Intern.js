// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

class Intern extends Employee {
    constructor (name, id, email, school, role){
        super (name, id, email, role);
        this.school = school
        this.role = "Intern"
    }
    
    getSchool(){
        if(this.shool != ""){
            return this.school
        }
        else {
            return "UCLA"}
    }
}




module.exports = Intern;