


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





e0ca02f8230f501712fb77e8d6eb9b7a6a53fd3a