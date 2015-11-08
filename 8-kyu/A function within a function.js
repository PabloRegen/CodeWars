/*  Description:

Given an input n, write a function always that returns a function which returns n.

var three = always(3);
three(); // returns 3
*/


// Solution #1
function always(n) {
	return function() {
		return n;
	};
}


// Solution #2
function always(n) {
    function returnN() {
      return n;
    }
    return returnN;
}


// Solution #3: JS6
function always(n) {
    return () => n;
}