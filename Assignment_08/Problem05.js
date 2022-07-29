// problem 5

// print "yes" if a given year is a leap year else "no"
//solve this using two methods
// method 1: using if else
// method 2: using ternary operator

/**
 *
 * Hint:
 * every year that is exactly divisible by four is a leap year,
 * except for years that are exactly divisible by 100,
 * but these centurial years are leap years if they are exactly divisible by 400
 *
 */

/**
 * use the year variable as user input.
 *
 * change this number to other values yourself and see if
 * you are getting the right answer
 * example: const year = 1000
 */

// Method 01(using if else)):
const year = 2004;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("yes");
} else {
  console.log("no");
}
//Output: yes
//
//
// Method 02(using ternary operator):
let ab =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "yes" : "no";
console.log(ab);
//Output: yes
