//Write a JavaScript program to find the missing number in an array

function find_num(arr){
    let n = arr.length;
    let sum = (n+1)*(n+2)/2;

    for(let i = 0; i < n; i++){
        sum -= arr[i];
    }
    return sum;
}

let arr = [1,2,3,4,5,7,8];
console.log("The missing number is: "+find_num(arr));