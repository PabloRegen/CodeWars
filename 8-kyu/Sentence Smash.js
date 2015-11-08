/*
Description:

Sentence Smash

Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example

var words = ['hello', 'world', 'this', 'is', 'great'];
smash(words); // returns "hello world this is great"

Assumptions

You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you do get an array.
*/

// My Solution
function smash (words) {
  var newString = words[0] || "";
  for (var i = 1; i < words.length; i++) {
    newString += " " + words[i];
  }
  return newString;  
}


// Solution #2
function smash (words) {
  return words.join(" ");
}


// Solution #3
function smash (words) {
  return words.length === 1 ? words[0] : words.join(" ");
}


// Solution #4: "use strict"
// In some of the older versions of JS, you have the ability to do certain things that are almost always a bad idea. 
// In the newer versions (ECMA 5) of JavaScript, if you place the statement "use strict"; at the top of a scope, there are new rules enforced on you.
function smash (words) {
    "use strict";  
    var smashed = "";
    for (var i = 0; i < words.length; i++) {
      smashed += words[i];
      if (i !== words.length - 1) {
        smashed += " ";
      }
    }
    return smashed;
}


// Solution #5
function smash (words) {
    var sentence = "";
    for (var i = 0; i < words.length; i++) {
      if (i === words.length - 1) {
        sentence += words[i];
      } else {
        sentence += words[i] + " ";
      }
    }
    return sentence;
}