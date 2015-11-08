/*  Description:

Trolls are attacking your comment section!  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/


// Solution #1: Regex
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


// Solution #2: filter method
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}