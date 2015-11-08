/*  Description:

Create a function called repeatIt that takes in a string and a number (n). The function should return a string that repeats the initial passed in string (n) number of times.

EXAMPLE:

If you pass in string "Hi" with a number (2)

--> "HiHi"

If anything other than a string is passed in you should return "Not a string"
*/


// Solution #1
function repeatIt(str, n) {
	if (typeof str !== "string") {
		return "Not a string";
	} else {
		var newStr = "";
		for (var i = 0; i < n; i++) {
			newStr += str;  // Instead could use newStr = newStr.concat(str)
		}
		return newStr;
	}
}


// Solution #2: Creating an Array with n+1 empty elements
function repeatIt(str, n) {
  return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
}