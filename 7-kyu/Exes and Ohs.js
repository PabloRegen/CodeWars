/*  Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


// Solution #1
function XO(str) {
	var x = 0;
	var o = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "x" || str[i] === "X") {
			x++;
		}
		if (str[i] === "o" || str[i] === "O") {
			o++;
		}
	}
	return x === o;	
}


// Solution #2: JS6 & Regex
function XO(str) {
  "use strict";
  let x = str.match(/x/gi); // match returns an array containing the matched results or null if no matches found
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}


// Solution #3
function XO(str) {
	var arr = str.toLowerCase().split('');
	return arr.filter(function(x) {return (x === 'x')}).length === arr.filter(function(o) {return (o === 'o')}).length;
}


// Solution #4: Similar to solution #3 but using JS6
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}