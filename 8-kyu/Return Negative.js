/*  Description:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
*/


// Solution #1
function makeNegative(num) {
	if (num > 0) {
		num = -num
	}
	return num;
}


// Solution #2
function makeNegative(num) {
  return num > 0 ? -num : num;
}


// Solution #3: Returns -0 for 0
function makeNegative(num) {
  return num < 0 ? num : -num;
}


// Solution #4: Returns -0 for 0 and -0
function makeNegative(num) {
  return -Math.abs(num);
}