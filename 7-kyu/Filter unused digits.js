/*  Description:

Given few numbers, you need to print out the digits that are not being used.

Example:

unusedDigits(12, 34, 56, 78) // "09"
unusedDigits(2015, 8, 26) // "3479"

Note:

Result string should be sorted
The test case won't pass Integer with leading zero
*/


// Solution #1
function unusedDigits() {
  var str = '';
  var digit = "0123456789";
  var result = '';

  // Convert arguments to array of strings
  var arr = [].slice.call(arguments).map(function (w) {
    return w.toString();
  });

  // Get 1 string str from array of strings
  for (var j = 0; j < arr.length; j++) {
    for (var x = 0; x < arr[j].length; x++) {
      str += arr[j][x];
    }
  }

  // Loop thru digit to compare to str
  for (var p = 0; p < digit.length; p++) {
    if (str.indexOf(digit[p]) === -1) {
      result += digit[p];
    }
  }
  return result
}


// Solution #2: Preferred in CodeWars - ???
function unusedDigits(...a){
  return `0123456789`.split('').filter(b=>`${a}`.split('').indexOf(b)==-1).join('');
}


// Solution #3: Codewars
function unusedDigits(...args) {
  return "0123456789".replace(new RegExp(`[${args}]`, "g"), "")
}


// Solution #4: Codewars
function unusedDigits(...args) {
  var digs = [0,1,2,3,4,5,6,7,8,9];
  args = args.join('');
  return digs.filter(digit=>!~args.indexOf(digit)).join('');
}


// Solution #5: Codewars
  return args.reduce(function(left, num) {
    (num+'').split('').map(function(digit) {
      left = left.replace(digit, '');
    });
    return left;
  }, '0123456789');
}


// Solution #6: Codewars
unusedDigits=(...a)=>'0123456789'.replace(new RegExp('['+a+']','g'),'')