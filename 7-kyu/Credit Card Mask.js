/*  Description:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/


// Solution #1
function maskify(cc) {
	if (cc.length <= 4) {
		return cc;
	} else {
		var a = "";
		for (var i = 0; i < cc.length - 4; i++) {
			a += "#";
		}
		return a + cc.slice(-4);
	}
}


// Solution #2: No need for the if sentence on Solution #1. If cc.length <= 4 the for loop doesn't run and a is an empty string
function maskify(cc) {
	var a = "";
	for (var i = 0; i < cc.length - 4; i++) {
		a += "#";
	}
	return a + cc.slice(-4);
}


// Solution #3
function maskify(cc) {
  var x = cc.length - 4;
  return x > 0 ? new Array(x + 1).join('#') + cc.slice(x) : cc;
}


// Solution #4: Preferred solution using Regex
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}


// Solution #5: Using Regex - Check how it works!
function maskify(cc) {
  return cc.replace(/.(?=....)/g, "#"); // Or cc.replace(/.(?=.{4})/g, "#"); Or cc.replace(/(?=.{5})./g, '#')
}


// Solution #6: Using Reduce method. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function maskify(cc) {
  return cc.split('').reduce(function(p, c, i) {
      return i < cc.length - 4 ? p + '#' : p + c;
  }, '');
}