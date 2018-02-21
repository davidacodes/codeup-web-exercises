"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

/**
 *filter each user object that has at least 3 languages in the laguages array
 **/

let threeLangs;
threeLangs = users.filter((user) => {
    return user.languages.length >= 3;
});

console.table(threeLangs);

/**
 *.map create an array of strings where each element is a user's email
 **/

let user_email = users.map((user) => {
    return user.email
});

console.table(user_email);

/**
 * .reduce to transfrom the array into an object where the objec's keys are ids and the values
 * objects that represent each user.
 */

let userObject = users.reduce((total, user) => {
    total[user.id] = [user.name];
    return total;
}, {});

console.log(userObject);


// const userObj = users.reduce((total, {id, name, email, languages}) => {
//     total[id] = {
//         name,
//         email,
//         languages
//     };
//     return total;
// });
//
// console.log(userObj);






