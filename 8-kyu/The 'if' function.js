/*  Description:

Who likes keywords? Nobody likes keywords, so why use them?

You know what keyword I use too much? if! 
We should make a function called _if, with its arguments as a logical test and two functions where the first function is executed if the boolean is true, 
and the second if it's false, like an if/else statement, so that we don't have to mess around with those nasty keywords! 
Even so, It should support truthy/falsy types just like the keyword.

Examples:

_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/


// Solution #1
function _if(bool, func1, func2) {
  if (bool) { // No need for (bool === true)
  	func1(); // "return" keyword not needed
  } else {
  	func2(); // "return" keyword not needed
  }
}


// Solution #2: Compacted version of Solution #1
function _if(bool, func1, func2) {
  if (bool) { func1(); }
  else { func2(); }
}


// Solution #3: Shorter version
function _if(bool, func1, func2) {
  bool ? func1() : func2() // "return" keyword not needed
}


// Solution #4: 1 line version of Solution #3
function _if(bool, func1, func2) {bool ? func1() : func2()}