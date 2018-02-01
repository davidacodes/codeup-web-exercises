/**
 *
 *
 *================================= ARRAY MANIPULATION =================================
 *
 *
 **/


/**
BONUS 1:

Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):

Using multiple functions will be helpful.

    input = 5552324343, output = 555-232-4343
input = 5553434, output = 555-3434
input = 18005552323, output = 1-800-555-2323

Extra Challenge: account for invalid characters
Extra Challenge: if the input is already formatted, output the unformatted version
Extra Challenge: allow the parser to accept letters and convert them to the correct numbers
**/

//
// function phonePaser(input);
//
// if (input ==)
//
//
//
// function phoneNumber(input) {
//     var phoneRegex = /^\d{10}$/;
//     if ((input.match(phoneRegex))) {
//         return true;
//     }
// }

function numberChanger(number) {
    var numberString = String(number);
    var numberArray = numberString.split('');
    var outputString = "";
    if (numberArray.length === 10) {
        console.log("It's ten")
        outputString += numberArray.splice(2, 1, "-");
        return outputString

    } else if (numberArray.length === 11) {
        console.log("It's eleven")


    } else if (numberArray.length === 7) {
        console.log("It's seven")


    } else {
        console.log("Is this a phone number? ")
    }
}
console.log(numberChanger("5552324343"));
console.log(numberChanger("5553434"));
console.log(numberChanger(18005552323));
console.log(numberChanger("I'm your butterfly"));








function testFormat(input) {
    var test = input.split('')
    if (test.indexOf('-') > 0) {
        return true;
    }
    return false;
}



/**
BONUS 2:

Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
    1) Add a student name
2) Delete a student name
3) View all student names in alphabetical order
4) View all student names in reverse alphabetical order
Store the student names in an array. Account for invalid user input.
 **/