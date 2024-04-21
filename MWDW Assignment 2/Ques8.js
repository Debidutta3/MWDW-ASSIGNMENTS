/*
 Employee tracking app
 Create a class to track the employees of a company:
 ● Usefirst names, last names, and the number of years worked as values in the
 constructor.
 ● Create two or more people with values for their first names, last names, and the number
 of years they've worked at the company. Add the people into an array.
 ● Setup a prototype to return the details of the person's first and last names and how long
 they've worked at the company.
 ● Iterate the contents of the array to output the results into the console, adding some text
 to make the output a full sentence
*/

//Initializing the class
class track_employees{

    //Initializing the first name, last name, and years worked
    constructor(firstname, lastname, years_worked){
        this.firstname = firstname;
        this.lastname = lastname;
        this.years_worked = years_worked;
    }
}

//Initializing the objects
let employee1 = new track_employees("John", "Buren", 10);
let employee2 = new track_employees("John", "McKinley", 15);
let employee3 = new track_employees("John", "Stebbs", 20);

//Initializing the array tp store the datas of the employees
let employee = [];
employee.push(employee1, employee2, employee3);

//Prototype to return the details of the person's first and last names and how long they've worked at the company
track_employees.prototype.details = function(){
    console.log(this.firstname+" "+this.lastname+" has worked for "+this.years_worked+" years.");
}

//Traversing through the employee array to get the output.
for(let i=0; i<employee.length; i++){
    console.log(employee[i].details());
}