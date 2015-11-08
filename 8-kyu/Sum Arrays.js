/*  Description:

Write a method sum that takes an array of numbers and returns the sum of the numbers. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Assumptions

You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/


// Solution #1: for loop
function sum(n) {
    var total = 0;
    for (var i = 0; i < n.length; i++) {
        total += n[i];
    }
    return total;
}


// Solution #2: while loop
function sum(n) {
    var total = 0;
    var i = 0;
    while (i < n.length) {
        total += n[i];
        i++
    }
    return total;
}


// Solution #3: Using reduce method. Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function sum(numbers) {
  return numbers.reduce(function(prev, cur) {
    return prev + cur;
  }, 0);
}