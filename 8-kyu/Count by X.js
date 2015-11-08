/*  Description:

Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python or Haskell.)

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

// Solution #1
function countBy(x, n) {
  var z = [];
  for (var i = 1; i <= n; i++) {
  	z.push(x * i);
  }
  return z;
}


// Solution #2
function countBy(x, n) {
  var z = [];
  for (var i = 1; i <= n ; i++) {
    z[i-1] = x * i;
  }
  return z;
}


// Solution #3
function countBy(x, n) {
    var z = [];
    while (z.length < n) {
        z.push(x * (z.length + 1));
    }
    return z;
}


// Solution #4: Similar to Solution 3 but abbreviated
function countBy(x, n) {
  var z = [];
  while (z.length < n) z.push(x * (z.length + 1));
  return z;
}


// Solution #5: My Solution
function countBy(x, l) {
  var myArray = [];
  var a = x;
  for (var i = 0; i < l; i++) {
    myArray.push(a);
    a+=x;
  }
  console.log(myArray);
}


// Solution #6: My Solution
function countBy(x, l) {
  var myArray = [];
  var a = x;
  var i = 0;
  while (i < l) {
    myArray.push(a);
    a+=x;
    i++;
  }
  console.log(myArray);
}