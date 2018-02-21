(function() {
    "use strict";
// # Map, Filter, Reduce exercise
//
// ## Source Data
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_1.json">Mock Data Batch 1</a>
//
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_2.json?1519228215291">Mock Data Batch 2</a>
//
// ## Exercises
// Make a page called functional_exercises.html
// Save both .json files into your project's ./data/ folder
//
// Use an ajax GET request to read the contents of both .json files.

let dataOne;
let dataTwo;
let dataAll = {};
dataOne = $.ajax("./data/mock-data-batch-1.json").done(dataTwo);
dataTwo = $.ajax("./data/mock-data-batch-2.json").done(combine);

function combine() {
    dataAll = Object.assign(dataOne, dataTwo);
    return dataAll;
}

console.log(dataAll);



// 1. Combine both arrays of objects into a single array. Name that variable users.
//
// 1. Use .reduce to get a sum total of every price from each object. Call that sum "totalPrices"
//

/**
    customers.map(function({ name,age }){
        return {
            name,
            age
        };
    });
    ////////////////////////////////

    const civilServants = customers.filter(user => {
        return user.occupation == "Teacher" || user.occupation == "Police Officer"
    })

    const civilServants = customers.filter(({ occupation }) => {
        return occupation == "Teacher" || occupation == "Police Officer"
    })
    /////////////////////////////////

    const output = family.reduce({ name, gender, age } => {
        //check my "base case"
        if(typeof accumulator.names === "undefined") {
            accumulator.names = [];
        }

        if(typeof accumulator.ages === "undefined") {
            accumulator.ages = [];
        }

        if (typeof accumulator.genders === "undefined") {
            accumulator.genders = [];
        }

        accumulator.names.push(person.name);
        accumulator.ages.push(person.age);
        accumulator.genders.push(person.gender);

        return accumulator;
    }, {});

    const output = {
        names: family.map(obj => obj.name),
        genders: family.map(obj => obj.name),
        ages: family.map(obj => obj.age)
    };

    // - Calculate the average age of family members

    const averageAge = Math.floor(family.reduce((accumulator, person) => {
        accumulator += person.age;
        return accumulator;
    }, 0) / family.length);

// - Create an array of family objects without the age property

// - Create an array of all minors
    const minors = family.filter(({ age }) => {
        return age < 18;
    });

// - Calculate the total age combined of family members
// - Create an array of only female family member objects

    const femaleFamily = family.filter(( { sex }) => {
        return sex === "female";
    });
**/



// 2. Use the users array and .reduce to determine how many shirts of each size we'll need to get. Example output should looks something like the following (numbers aren't exact)
//
// {
//     "S": 200,
//     "M": 892,
//     "L": 290,
//     "XL": 442
// }
//
// 2. Produce a new array of objects w/ only the car info. Call this array allCars. Each object should only have the make, model, color, price, used properties
//
// 3. Produce a single object called car_data w/ the following properties
// - `avg_price`, `avg_new_price`, `avg_used_price`, `top_make`, `top_model`, `total_number`, `number_used`, `number_new`, `highest_price`, `lowest_price`
//
// 4. Make an array called admins that contains only users who are admins
//
// 5. Make an array called authors that contains only users who are authors
//
//
// 1. Make an object called departments. That departments object should have a property for each department name. The value for each department name should be an array of user objects containing firstName, lastName, department, email, and buzzword
//
// {
//     "legal": [
//     {"first_name": "Jane", "email":"jane@jane.com", "buzzword":"activating motivators!"},
//     {"first_name": "Bob", "email":"bob@bob.com", "buzzword":"telegraphing bankers"}
// ],
//     "marketing": [
//     {"first_name": "Marsha", "email":"marsh@sha256.com", "buzzword":"securing wonder"},
//     {"first_name": "Pat", "email":"itspat@patrocks.com", "buzzword":"whatever works"}
// ],
//     etc ...
// }

})();