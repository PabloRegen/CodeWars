/*
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples

stringToNumber("1234") == 1234
stringToNumber("605" ) == 605
stringToNumber("1405") == 1405
stringToNumber("-7"  ) == -7
*/


// Solution #1
var stringToNumber = function(str){
  return Number(str);
};


// Solution #2:
// JS interprets the + sign as Number in this case
var stringToNumber = function(str){
  return +str;
};


// Solution #3
// Converts string to integer. It does not round the number
var stringToNumber = function(str){
  return parseInt(str);
}


// Solution #4
// Converts string to float
var stringToNumber = function(str){
  return parseFloat(str);
}


// Solution #5: 
// JS converts a string to a number when using either -, * or / operators and do the math. 
// With + operator it does not. It concatenates the string and the number instead.
var stringToNumber = function(str){
    return str*1;
}