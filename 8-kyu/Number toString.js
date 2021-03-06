/*   Description:

The code gives an error!
a = 123.toString
Fix it! 
*/


// My Solution
var a = [123].toString();

// All the solutions below are correct
var a = 123..toString();
var a = 123 .toString()
var a = (123).toString();
var a = 123 + '';
/* 
The . has two separate meanings in Javascript, which are competing in this Kata. First, it can be a decimal point: 123.45 Second, it can be a property accessor: object.property

If the . is right next to a number (on either side), it's parsed as a decimal point (123. and .45 are both valid Javascript numbers). Otherwise, it's the property accessor.

The first three were just 3 different ways to force the property accessor . to be interpreted as a property accessor instead of as a decimal point.

  - 123..toString(): Numeric literal 123. followed by .toString()
  - 123 .toString(): Numeric literal 123 followed by .toString()
  - (123).toString(): Numeric expression (123) followed by .toString()
  - 123 + '': Numeric literal 123, implicitly typecast to string and added to '' (note: this doesn't actually call toString())

123.toString() doesn't work because the . is parsed as part of the number, like this:

  - Numeric literal 123. followed by toString() - SyntaxError: identifier starts immediately after numeric literal

Since the . gets grabbed as part of the number instead of the property accessor, you end up with the error. It needs to parse .toString() together in order to access the toString property of the number.
*/

var a = String(123);
var a = "123";
var a = Number(123).toString();

var a = 123;
a = a.toString();