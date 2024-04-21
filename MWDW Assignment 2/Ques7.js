/*
 Set timeout order
 Use the arrow format to create functions that output the values one and two to the console.
 Create a third function that outputs the value three to the console, and then invokes the first two
 functions. Create a fourth function that outputs the word four to the console and also use
 setTimeout() to invoke the first function immediately and then the third function.
 What does your output look like in the console? 
 */

 
//Function that prints one
let function1 = () => {
    console.log("One");
}

//Function that prints two
let function2 = () => {
    console.log("Two");
}

//Function that prints three, and then calls both functions
let function3 = () => {
    console.log("Three");
    function1();
    function2();
}

////Function that prints four and then calls the first function and the third function.
let function4 = () => {
    console.log("Four");
    setTimeout(function1, 0);
    setTimeout(function3, 0);
}

//Output
function4();