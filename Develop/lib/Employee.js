// TODO: Write code to define and export the Employee class

class Employee {    
    constructor (name, id, email){
    this.name =name;
    this.id = id;
    this.email = "test@test.com";
    }

    getEmail(){
        return this.email
    };
    
    getName(){
        return this.name
    };

    getId(){
        return this.id
    };

    getRole(){
        return "Employee"
    }
}



module.exports = Employee;