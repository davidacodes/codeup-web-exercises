


function wait(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve();
            } else {
                reject();
            }
        }, input)
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));





function getLastCommit(username){
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token e0ca02f8230f501712fb77e8d6eb9b7a6a53fd3a'}})
        .then((response) => response.json())
        .then(data => {
            let lastCommit = data[0].created_at.substring(0, 10);
            console.log(`${username}'s last commit was on: ${lastCommit}`)
        })
        .catch(() => console.error('BAD REQUEST!'));
}


getLastCommit('davidalex620');





