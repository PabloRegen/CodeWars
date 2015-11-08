/*  Description:

Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy 
Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

f(n=100) // returns 5050
It's your duty to verify that n is a valid positive integer number. If not, please, return false.

+++++++++++++++++++++++++++++++++++++++++++++++++++++
Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code. 
Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can. 
+++++++++++++++++++++++++++++++++++++++++++++++++++++
*/


// Solution #1
function f(n){
	if (Number(n) === n && n > 0 && n % 1 === 0) { 
		var sum = 0;
		for (var i = 1; i <= n; i++) {
			sum += i;
		}
		return sum;
	} else {
		return false;
	}
}


// Solution #2: Preferred on CodeWars
function f(n){
  return (parseInt(n) === n && n > 0) ? n * (n + 1 ) / 2 : false;
};


// Solution #3
function f(n){
  return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
};


// Solution #4
function f(n){
  return !isNaN(n) && Math.floor(n) === n && n > 0 ? (n * (n + 1)) / 2 : false;
};


// Solution #5
function f(n){
  return n > 0 && !(n % 1) ? n * ++n / 2 : false;
}