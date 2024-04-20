/*
Write a JavaScript function to check whether a given value is a valid URL or not.
*/


function isValidUrl(value) {
    try {
      new URL(value);
      return true;
    } catch (e) {
      return false;
    }
  }

console.log(isValidUrl('https://www.example.com'));
console.log(isValidUrl('example.com'));