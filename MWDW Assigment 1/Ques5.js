//Write a JavaScript function to display whether given number is prime or not.

function isPrime(num){

    if(num < 2){
        console.log("The number is not prime");
        return;
    }
    
    for(let i=2; i<num; i++){
        if(num % i == 0){
            console.log("The number is not prime");
            return;
        }
    }
    console.log("The number is prime");
}

let num1 = 15;
let num2 = 17;
let num3 = 1;

isPrime(num1);
isPrime(num2);
isPrime(num3);