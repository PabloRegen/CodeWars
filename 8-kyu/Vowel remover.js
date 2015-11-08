/*  Description:

Create a function called shortcut() to remove all the lowercase vowels in a given string.

Example:

shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby

Don't worry about uppercase vowels.
*/


// Solution #1: Using Regex
function shortcut(str){
  return str.replace(/[aeiou]/g,'')
}


// Solution #2: indexOf on strings
function shortcut(str) { 
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if ("aeiou".indexOf(str[i]) === -1) {
            output += str[i];
        } 
    }
    return output;
}


// Solution #3: indexOf on arrays
function shortcut(str) {
	var arr = str.split('');
	var output = [];
	for (var i = 0; i < arr.length; i++) {
		if (['a', 'e', 'i', 'o', 'u'].indexOf(arr[i]) === -1) {
			output.push(arr[i]);
		}
	}
	return output.join('');
}


// Solution #4: Using array's filter method
function shortcut(str) {
    return str.split('').filter(function(ltr) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(ltr) === -1; 
    }).join('')
}


// Solution #5: Using array's map method
function shortcut(str) {
    return str.split('').map(function(ltr) {
    	if (['a', 'e', 'i', 'o', 'u'].indexOf(ltr) === -1) {
    		return ltr;
    	}
    }).join('');
}