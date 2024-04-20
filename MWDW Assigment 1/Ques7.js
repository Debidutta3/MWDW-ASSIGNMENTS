//Write a JavaScript function to find the sum of all the numbers in an array.

function findSum(arr){

    let sum = 0;
        for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let arr2 = [1,2,3,4,5,6];
console.log(findSum(arr2));