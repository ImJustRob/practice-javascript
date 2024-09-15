// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var x = "robert";
var y = "lothian";

console.log( x + " " + y);

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

var first = "robert";
var last = "lothian";

console.log(`my name is ${first} ${last}`);

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

var color1 = "red";
var color2 = "green";
var color3 = "blue";

console.log("my favorite colors are " + color1 + ", " +  color2 + " " + "and " + color3)

// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [3, 4, 6];
var newnumber = [];
var i = 0;
while (i < numbers.length) {
  var number = numbers[i];
  newnumber.push(number * 3);
  i = i + 1;
}
console.log(newnumber);

// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var greeting = ["hello", "goodbye"];
var newgreeting = [];
var i = 0;
while (i < greeting.length) {
  newgreeting.push(greeting[i].toUpperCase());
  i = i + 1;
}
console.log(newgreeting);

// Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [4, 6, 8];
var newnumbers = [];
var i = 0;

while (i < numbers.length) {
  newnumbers.push(numbers[i] + 7);
  i += 1;
}
console.log(newnumbers);
