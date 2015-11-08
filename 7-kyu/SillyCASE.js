/*  Description:

Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//         AN     second half (upper-cased) 
*/


// My Solution
function sillycase(silly) {
  return silly.slice(0, Math.ceil(silly.length / 2)).toLowerCase() + silly.slice(Math.ceil(silly.length / 2)).toUpperCase();
}


// Solution #1
function sillycase(silly) {
  var c = Math.round(silly.length / 2);
  return silly.substr(0, c).toLowerCase() + silly.substr(c).toUpperCase();
}


// Solution #2
function sillycase(silly) {
  silly = silly.split("");
  for (var i = 0; i < silly.length; i++) {
    if (i < silly.length / 2) {
      silly[i] = silly[i].toLowerCase();
    } else {
      silly[i] = silly[i].toUpperCase();
    }
  }
  return silly.join("");
}