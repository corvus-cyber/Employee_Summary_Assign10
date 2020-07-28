// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

class Manager extends Employee {
    constructor (name, id, role, officeNumber){
        super (name, id);
        this.officeNumber = 100
        this.role = "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber
    }
    
}

module.exports = Manager;