/*
 Manipulating an array
 Take the following array:
 const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
 {test: 'one', score: 55}, ['one', 'two']];
 Manipulate your array using various methods, such as pop(), push(), shift(), and
 unshift(), and transform it into the following:
 ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
 Take the following steps, or adopt your own approach:
 • Remove the first item and the last item.
 • Add FIRST to the start of the array.
 • Assign hello World to the fourth item value.
 • Assign MIDDLE to the third index value.
 • Add LAST to the last position in the array.
 • Output it to the console.
*/

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.shift();
theList.unshift("FIRST");

theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();

theList.push("MIDDLE", "hello world", "LAST");

console.log(theList);