/*  Description:

Implement a function called makeAcronym that returns the first letters of each word in a passed in string.

Make sure the letters returned are uppercase.

If the value passed in is not a string return 'Not a string'.

If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.

If the string is empty, just return the string itself: "".

EXAMPLES:

'Hello codewarrior' -> 'HC'
'a42' -> 'Not letters'
42 -> 'Not a string'
[2,12] -> 'Not a string'
{name: 'Abraham'} -> 'Not a string'
*/


// Solution 1
var makeAcronym = function(string){
	if (typeof string !== "string") {
		return "Not a string";
	}
	for (var i = 0; i < string.length; i++) {
		var c = string[i].charCodeAt();
		// test if all characters are different than letters or space
		if (c < 32 || (c > 32 && c < 65) || (c > 90 && c < 97) || c > 122) { 
			return "Not letters";
		}
	}
	return string.split(" ").map(function(v) {
		return v[0].toUpperCase();
	}).join("");
};

// Most solution in CodeWars take advantage of Regex

/*
var makeAcronym = function(string){
	if (typeof string !== "string") {
		return "Not a string";
	}
	string = string.trim()
	var array_of_string = string.split(" ");
	var final_string = "";
	for (var i = 0; i < array_of_string.length; i++){
		var first_char = array_of_string[i][0]
		if (first_char != undefined)
			final_string += first_char + " ";
	}
	console.log(final_string);
	return final_string;

	for (var i = 0; i < string.length; i++) {
		var c = string[i].charCodeAt();
		// test if all characters are different than letters or space
		if (c < 32 || (c > 32 && c < 65) || (c > 90 && c < 97) || c > 122) { 
			return "Not letters";
		}
	}
	return string.split(" ").map(function(v) {
		return v[0].toUpperCase();
	}).join("");
};