/**
 *
 * Write a function named wait that accepts a number as a parameter, and returns
 * a promise that resolves after the passed number of milliseconds.
 */

function wait(timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Your promise resolved after ${timer} milliseconds`);
        }, timer)
    });
}

wait(1000).then((data) => console.log(data));
wait(3000).then((data) => console.log(data));



/**
 *
 * Create a function that accepts a github username, and returns a promise that
 * resolves with the date of the last commit that user made.
 */

function getLastCommit(username){
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token $API_KEY'}})
        .then((response) => response.json())
        .then(data => {
            let lastCommit = data[0].created_at.substring(0, 10);
            console.log(`${username}'s last commit was on: ${lastCommit}`)
        })
        .catch(() => console.error('BAD REQUEST!'));
}


getLastCommit('davidalex620');





