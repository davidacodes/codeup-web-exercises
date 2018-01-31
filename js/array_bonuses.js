

/**
=== Array Bonuses ===
 **/


 /**
  * TODO:
1. Write a function called average(numbers) that takes in an array of numbers and returns the average
  */
    function average(numbers) {
        var total = 0;
        for(var i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        var avg = total / numbers.length;
        return avg;
    }

 /**
  * TODO:
2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.
*/
    function sumAll(numbers) {
         var total = 0;
         for(var i = 0; i < numbers.length; i++) {
             total += numbers[i];
         }
         return total;
    }

  /**
  * TODO:
3. Write a function called max(numbers) that takes in an array of numbers and returns the largest
*/
            function max(numbers) {
                return Math.max.apply(null, numbers);
            }


 /**
  * TODO:
4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest
*/

     function min(numbers) {
         return Math.min.apply(null, numbers);
     }

 /**
  * TODO:
5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order
*/

        function reverseArray(array) {
            return array.reverse();
        }

 /**
  * TODO:
6. Write a function called randomElement(array) that takes in an array and returns a random element
*/

     function randomElement(array) {
        return array[Math.floor(Math.random()*array.length)];
     }

 /**
  * TODO:
7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.
  */

     function upperCaseAll(array) {
         for (var i = 0; i < array.length; i++) {
             array[i] = array[i].toUpperCase();
         }
        return array;
     }

  /**
  * TODO:
8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.
*/
    function getOdds(array){
        var oddNumbers = new Array();
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                continue;
            } else {
                oddNumbers.push(array[i]);
            }
        }
        return oddNumbers;
  }

  /**
  * TODO:
9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers
*/
  function getEvens(array){
      var evenNumbers = new Array();
      for (var i = 0; i < array.length; i++) {
          if (array[i] % 2 !== 0) {
              continue;
          } else {
              evenNumbers.push(array[i]);
          }
      }
      return evenNumbers;
  }

 /**
  * TODO:
10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers
  */
 function multiplyAll(numbers) {
     var total = 1;
     for (var i = 0; i < numbers.length; i++) {
         total *= numbers[i];
     }
     return total;
 }



