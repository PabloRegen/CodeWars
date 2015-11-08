/*  Description: 

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will won') => ["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/


// Solution #1: Modifying each array element created by the split method
function addLength(str) {
	var arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		arr[i] += " " + arr[i].length;
	}
	return arr;
}


// Solution #2: Push method 
function addLength(str) {
	var arr = str.split(" ");
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + " " + arr[i].length);
	}
	return newArr;
}


// Solution #3: Using maps. Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// When a function requires one argument, the argument will automatically be assigned to each element of the array as map loops through the original array.
function addLength(str) {
    return str.split(" ").map(function(v) {
        return v + " " + v.length;
    });
}


//Solution #4: Same as above but written in one line
function addLength(str) {return str.split(" ").map(function(v) {return v + " " + v.length})}


//Solution #5: Impleented in JS 6
function addLength(str) {
    return str.split(" ").map(v => v + " " + v.length);
}