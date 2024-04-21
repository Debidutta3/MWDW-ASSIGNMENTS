/*
 Company product catalog
 In this project, you will implement a data structure for a product catalog and create
 queries to retrieve data.
 ● Create an array to hold an inventory of store items.
 ● Create three items, each having the properties of name, model, cost, and
 quantity.
 ● Add all three objects to the main array using an array method, and then log
 the inventory array to the console.
 ● Access the quantity element of your third item, and log it to the console.
 Experiment by adding and accessing more elements within your data
 Structure
*/

let inventory = [];

//Initializing the items
let item1 = {
    name: "Apple",
    model: "Iphone 15",
    cost: 150000,
    quantity: 10
};
let item2 = {
    name: "Samsung",
    model: "S23 Ultra",
    cost: 125000,
    quantity: "15"
};
let item3 = {
    name: "Google",
    model: "Google Pixel 8a",
    cost: 116000,
    quantity: 11
};

//Using array method to push the items into the created array
inventory.push(item1, item2, item3);
console.log(inventory);

//Accesing the quantuty of item3
let item3_quantity = inventory[2].quantity;
console.log("The quantity of item3 is "+item3_quantity);