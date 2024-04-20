/*
Write a JavaScript program to display digital clock and update clock time in
every second.
Hints: use setInterval(function, miliseconds) or setTimeout(function,
miliseconds)
date = new Date();
h=date.getHours();
m=date.getMinutes();
s=date.getSeconds();
*/

function updateTime(){  //A function that updates the time
    
    let date = new Date();
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    console.log(h+":"+m+":"+s);
}

setInterval(updateTime, 1000);
