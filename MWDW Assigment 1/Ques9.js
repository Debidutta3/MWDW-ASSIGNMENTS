/*
Write a JavaScript program that creates a class called University with
properties for university name and departments. Include methods to add a
department, remove a department, and display all departments. Create an instance
of the University class and add and remove departments.*/


class University{
    
    constructor(name){          //Name of the universiity
        this.name = name;
        this.department = [];
    }

    add_departments(dep){
        this.department.push(dep);
    }

    remove_departments(dep) {
        this.department = this.department.filter((val) => {
           return val !== dep;
    });
    }

    display(){
        for(let i=0; i<this.department.length; i++){
            console.log(this.department[i]);
        }
    }
}

let obj = new University("ITER");

//Add elements:
obj.add_departments("CSE");
obj.add_departments("CSIT");
obj.add_departments("ECE");
obj.add_departments("SE");
obj.add_departments("EEE");
obj.display();

//Remove elements:
obj.remove_departments("CSE");
obj.display();