// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

class Manager extends Employee {
    constructor (name, id, role, officeNumber){
        super (name, id);
        this.officeNumber = officeNumber
        this.role = "Manager"
    }

    getOfficeNumber(){
        if(this.officeNumber != ""){
            return this.officeNumber}
        
        else {
            return 100}
    }

    
    
}

module.exports = Manager;