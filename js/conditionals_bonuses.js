/**
================================= CONDITIONALS BONUSES

Bonus 1.

Write a function (or multiple functions) that will return
a boolean depending on if the string value passed to it
as an argument is the name of a day of the week that starts with a T.
    Otherwise, it should return false.

    Example: dayOfTheWeekStartsWithT("Monday")     => returns false
Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
 **/


function dayOfTheWeekStartsWithT(day) {
    return (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday");
}


/**
Bonus 2.

Write a function, isValidPassword, that takes in a string argument and returns true or false
depending on whether or not all the following conditions are true:

1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
2) Contains at least one letter and one number
3) Contains at least one upper and one lower case letter
4) Only comprised of letters and numbers
5) EXTRA BONUS: is not the same forwards and backwards
 **/


function isValidPassword(userPassword) {
    return (userPassword.length === 6) && /\d/.test(userPassword) && /[a-z]/.test(userPassword) && /[A-Z]/.test(userPassword);
}



