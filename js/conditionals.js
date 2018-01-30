"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var number;

var createNumber = confirm("Would you like to enter a number?");

if (createNumber) {
    number = prompt("What number would you like to pick?");
    if ( 0 == number % 2) {
        alert(number + " is an even number.");
    } else {
        alert(number + " is an odd number.");
    }
    alert("If we add 100 to your number it's " + (parseInt(number) + 100));
    if ( 0 < number) {
        alert(number + " is a positive number.");
    } else if (0 > number) {
        alert(number + " is a negative number.");
    } else {
        alert("You picked zero? Way to shoot for the stars! LULZ");
    }
} else {
    alert("Ok if you don't want to pick a number that's fine. ");
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
var rainbow;

function analyzeColor(rainbow) {
    if (rainbow === 'red') {
        return console.log('Bloody Mary\'s in the morning.');
    } else if (rainbow === 'orange') {
        return console.log('All you can drink mimosas?');
    } else if (rainbow === 'green') {
        return console.log('Irish Car Bomb');
    } else if (rainbow === 'blue') {
        return console.log('Route 44 Ocean Water but with a lot of vodka');
    } else if (rainbow === 'indigo') {
        return console.log('is indigo like a blue or a purple? do we really need it?');
    } else if (rainbow === 'violet') {
        return console.log("Violet, Purple Drank!");
    } else {
        return console.log('That is not a color from the Rainbow!');
    }
}
analyzeColor(randomColor);

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch (randomColor) {
    case "red":
        console.log('Bloody Mary\'s in the morning.');
        break;
    case 'orange':
        console.log('All you can drink mimosas?');
        break;
    case 'green':
        console.log('Irish Car Bomb');
        break;
    case 'blue':
        console.log('Route 44 Ocean Water but with a lot of vodka');
        break;
    case 'indigo':
        console.log('is indigo like a blue or a purple? do we really need it?');
        break;
    case "violet"
        console.log('Violet, Purple Drank');
        break;
    default;
        console.log('That is not a color from the Rainbow!');
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("What is your favorite color from the Rainbow?");


switch (userColor.toLowerCase()) {
    case "red":
        alert('Red');
        break;
    case 'orange':
        alert('Orange');
        break;
    case 'green':
        alert('Green');
        break;
    case 'blue':
        alert('Blue');
        break;
    case 'indigo':
        alert('Indigo');
        break;
    case "violet":
        alert('Violet');
        break;
    default:
        alert('That is not a color from the Rainbow.');
}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calcutateTotal(randomNumber, totalPrice) {
    switch (randomNumber) {
        case 0:
            console.log("You got no discount, your total is " + totalPrice);
            break;
        case 1:
            console.log("You got a 10% discount, your total is $" + (totalPrice - (totalPrice * .10)));
            break;
        case 2:
            console.log("You got a 25% discount, your total is $" + (totalPrice - (totalPrice * .25)));
            break;
        case 3:
            console.log("You got a 35% discount, your total is $" + (totalPrice - (totalPrice * .35)));
            break;
        case 4:
            console.log("You got a 50% discount, your total is $" + (totalPrice - (totalPrice * .50)));
            break;
        case 5:
            console.log("You got a 100% discount, it's all free.");
            break;
        default:
            console.log("Something went wrong, YOU PAY DOUBLE!");
            break;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("What was your total bill?")
calcutateTotal(luckyNumber, totalBill);
