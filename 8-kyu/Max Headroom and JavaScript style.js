/*  Description: 

Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value?  
Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?
*/


// Solution #1
function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  // Moved the brace up
  return {
    name: 'Max Headroom'
  }
}


// Solution #2: Preferred. Have your return object on same line
function getMax1() {
  var max = {name: 'Max Headroom'}
  return max;
}

function getMax2() {
  return {name: 'Max Headroom'};
}