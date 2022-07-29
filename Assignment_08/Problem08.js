// problem 8

// you have 3 numbers.
// write a program which can find the largest number

/**
 * use the numOne, numTwo and numThree variable as user input.
 *
 * change them to other values yourself and see if
 * you are getting the right answer
 * example: const numOne = 250, numTwo = 4, numThree = 5
 */

const numOne = 10;
const numTwo = 6;
const numThree = 55;

if (numOne > numTwo && numOne > numThree) {
  largest = numOne;
} else if (numTwo > numOne && numTwo > numThree) {
  largest = numTwo;
} else {
  largest = numThree;
}
console.log("The largest number is " + largest);

//Output: The largest number is 55
