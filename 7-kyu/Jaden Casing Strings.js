/*  Description:

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he used to deliver via Twitter. When writing on Twitter, he was known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/


// My Solution
String.prototype.toJadenCase = function () {
  var word = this.split(" ");
  for (var i = 0; i < word.length; i++) {
  	word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
};


// Solution #1
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(w){
    return w[0].toUpperCase() + w.slice(1);
  }).join(" ");
};


// Solution #2: Similar to Solution #1 but written in 1 line
String.prototype.toJadenCase = function () {
  return this.split(' ').map(function(w) { return w[0].toUpperCase() + w.slice(1); }).join(' ');
};


// Solution #3: check regex
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};


// Solution #4: check regex
String.prototype.toJadenCase = function () {
  return this.replace(/(?:^|\s)\S/g, function(c) { return c.toUpperCase(); });
};


// Solution #5: check regex
String.prototype.toJadenCase = function () {
  return this.split(/\s/g).map(function(w){
    return w[0].toUpperCase() + w.substr(1);
  }).join(' ');
};