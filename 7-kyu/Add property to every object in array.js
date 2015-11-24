/*  Description:

Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. 
The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];

The questions array is already defined for you and is not the same as the one in the example.
*/


// Solution #1
function addProp() {
    for (var i = 0; i < questions.length; i++) {
        questions[i].usersAnswer = null
    }
    return questions;
}


// Solution #2
function addProp() {
    for (var prop in questions) {
        questions[prop].usersAnswer = null;
    }
    return questions;
}


// Solution #3: forEach or map methods
function addProp() {
    return questions.forEach(function (i) { // can use map instead of forEach but there are differences
        i.usersAnswer = null;
    });
}

console.log(addProp());