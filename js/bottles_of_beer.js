
'use strict';

/**
 *
 * Make code for the "99 bottles of beer" song.
 * - when you have 1 bottle, be sure to say "bottle" not "bottles"
 * - when you have 0 bottle, say "all done"
 *
 *
 **/

for (var i = 100; i > -1; --i) {

    if (i === 0) {
        console.log("all done");
    }

    if (i === 1 ) {
        console.log("1 bottle of beer on the wall.");
        continue;
    }

    if (i > 0) {
        console.log( i + " bottles of beer on the wall.");
    }

}