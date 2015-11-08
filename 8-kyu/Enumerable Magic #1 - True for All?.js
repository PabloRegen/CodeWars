/*   Description

Create a method all which takes an array, and a function, and returns true if the function returns true for every element in the array. 
Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the function test. 
*/

// Solution #1
function all(arr, fun){
  var value = true;
  for (var i = 0; i < arr.length; i++) {
  	if (fun(arr[i]) !== true) {
  		value = false;
  		break;
  	}
  }
  return value;
}


//Solution #2: The "every" method does exactly what the exercise requests
function all(arr, fun){
  return arr.every(fun);
}