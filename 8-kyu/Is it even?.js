/*  Description:

In this Kata we are passing a number (n) into a function.  Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.  Numbers may be positive or negative, integers or floats.  Floats are considered UNeven for this kata.
*/


// Solution #1
function testEven(n) {
	if (n % 2 === 0) {
		return true;
	} else {
		return false;
	}
}


// Solution #2
function testEven(n) {
    return n % 2 === 0;
}


// Solution #3: Inverts return 0 (false) or 1 (true)
function testEven(n){
  return !(n % 2);
}


// Solution #4
function testEven(n) {
   return n % 2 === 0 ? true : false;
}