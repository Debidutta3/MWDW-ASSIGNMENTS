/*
 Friend checker game
 Ask the user to enter a name, using the switch statement to return a confirmation
 that the user is a friend if the name selected is known in the case statements. You
 can add a default response that you don't know the person if it's an unknown name.
 Output the result into the console
*/

let name = prompt("Enter a name");
switch(name){
    case "Sandeep":
    case "Partha":
    case "Aditya":
    case "Alisha":
    case "Arjun":
        console.log(name +" is a friend");
        break;
    default:
        console.log(name + " is not a friend");
        break;
}