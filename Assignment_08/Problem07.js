// problem 7

// write program to check whether num variable is between 100 and 200 or 400 and 500
// print true if it is, else print false
// handle edge cases. Hint: what if number is a string or null?

/**
 * use the num variable as user input.
 *
 * change this number to other values yourself and see if
 * you are getting the right answer
 * example: const num = 250
 */

let num = 150;

const low = 100;
const high = 200;
const low1 = 400;
const high1 = 500;

if ((num > low && num < high) || (num > low1 && num < high1)) {
  console.log("True");
} else {
  console.log(" False");
}

//Output: True
