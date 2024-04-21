/*
 Menu items price calculator
 Create a class which will allow you to work out the combined price of a number of items, and
 interact with it to work out the total cost of different orders.
 ● Create a class that contains the prices of two menu items as private field declarations.
 ● Use the constructor in the class to get the argument values (how many of each item are
 being bought).
 ● Create a method to calculate and return the total cost depending on how many of each
 item the user selects.
 ● Useagetter property to grab the value output by the calculation method.
 ● Create two or three objects with different combinations of menu selections, and output
 the total cost in the console
*/

class Menu{
    #item1;
    #item2;

    constructor(item1, item2){
        this.#item1 = item1;
        this.#item2 = item2;
    }

    //To calculate the total price of the items.
    gettotal(n1, n2){
        return n1*this.#item1 + n2*this.#item2;
    }
}

//Defining objects
let menu1 = new Menu(10, 15);
let menu2 = new Menu(5, 10);

//Output
console.log(menu1.gettotal(3,4));
console.log(menu2.gettotal(3,4));