/**Make a new html file called function_drills.html
* Make a new js file called function_drills.js
* Each time you define a new function, be sure to run it with some test inputs.
**/
    /** Make a function named sayHello(name) that returns "Hi " + name. **/
    function sayHello(name) {
        return console.log("Hi " + name);
    }

    /** Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string. **/
    function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

    /** Write a function named upperCase(string) **/
    function upperCase(string) {
        return string.toUpperCase()
    }

    /** Make a function named identity(input) that returns the input exactly as provided. **/
    function identity(input) {
        return input; // + " this is a " + typeof(input);
    }

    /** Make a function named isOdd(number) **/
    function isOdd(number) {
        return 0 != (number % 2);
    }

    /** Make a function named isEven(number) **/
    function isEven(number) {
        return 0 == (number % 2);
    }

    /** Make a function named isPositive(number) **/
    function isPositive(number) {
        return number > 0;
    }

    /** Make a function named isNegative(number) **/
    function isNegative(number) {
        return number < 0;
    }

    /** Make a function named isBoolean(input) **/
    function isBoolean(input) {
        return typeof(input) === "boolean";
    }

    /** Make a function named isTrue(boolean) **/
    function isTrue(boolean) {
        return boolean === true;
    }

    /** Make a function named isFalse(boolean) **/
    function isFalse(boolean) {
        return boolean === false;
    }

    /** Make a function named isTruthy(input) **/
    /** Make a function named isFalsy(input) **/
    /** Make a function named isVowel(letter) **/
    function isVowel(letter) {
        var vowels = ["a", "e", "i", "o", "u", "y"];
        return vowels.indexOf(letter.toLowerCase()) > -1;
    }

    /** Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels **/
    function hasVowels(string) {
            var count = string.length;
            console.log(count);
        if (count < 0; isVowel(string.charAt(count - 1))) {
            console.log(string.charAt(count));
             count -= 1;
        } else {
            return console.log("No vowels were found.")
        }
    }
    /** Make a function named isConsonant(letter) **/
    /** Make a function named hasConsonants(string) **/
    /** Make a function named isCapital(letter) **/
    function isCapital(letter) {

    }
    /** Make a function named hasCapitalLetters(string) that returns if a string has any capitals. **/
    /** Make a function named isLowerCase(letter) **/
    /** Make a function named hasLowerCase(string) that returns if a string has any lower cased **/
    /** Make a function named isSpace(letter) that returns if a character is a space character **/
    /** Make a function named hasSpaces(string) that returns if a string has any space characters
     /** Make a function named isZero(number) **/
    /** Make a function named increment(number) that returns a number plus one **/
    /** Make a function named decrement(number) that returns a number minus one **/
    /** Make a function named isFive(input) **/
    /** Make a function named addFive(input) that adds five to some input. **/
    function addFive(input) {
        return Number(input) + 5;
    }

    /** Make a function named isMultipleOfFive(input) **/
    function isMultipleOfFive(input) {
        return 0 == (input % 5);
    }

    /** Make a function named isThree(input) **/
    /** Make a function named isMultipleOfThree(input) **/
    /** Make a function named isMultipleOfThreeAndFive(input) **/
    /** Write a function named lowerCase(string) **/
    function lowerCase(string) {
        return string.toLowerCase()
    }

    /** Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized. **/
    /** Write a function named add(a, b) that returns the sum of a and b **/
    /** Write a function named subtract(a, b) that returns a minus b **/
    /** Write a function named multiply(a, b) that returns the product of a times b **/
    /** Write a function named divide(a, b) that returns a divided by b **/
    /** Write a function named remainder(a, b) that returns the remainder after dividing a by b **/
    /** Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs. **/
    /** Make a function named isNumeric(input) returns true/false if the input is a number or numeric string **/
    /** Make a function named trim(string) that removes empty spaces before and after the input.  **/
