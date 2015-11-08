/*  Description:

Jenny has written a function that returns a greeting for a user.  However, she's in love with Johnny, and would like to greet him slightly different. 

She added a special case to her function, but she made a mistake.  Can you help her?
*/


//Solution #1
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
  	return "Hello, " + name + "!";
  }
}


// Solution #2 : removing curly brackets & else
function greet(name) {  
  if (name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}


// Solution #3
function greet(name) {
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}


// Solution #4
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}