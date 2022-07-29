// problem 1

// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// method 1: using nested if else
// method 2: using logical operators
// ------------------------

// Method-01 :
let no = 9;

if (no % 2 == 0 && no < 15) {
  console.log("a");
}
if (no % 2 == 0 && no > 15) {
  console.log("b");
}
if (no % 2 !== 0 && no < 10) {
  console.log("c");
}
if (no % 2 !== 0 && no > 10) {
  console.log("d");
}
//Output: c.
//
//
// Method-02 :
if (no % 2 == 0) {
  if (no < 15) {
    console.log("a");
  } else {
    console.log("b");
  }
} else {
  if (no < 10) {
    console.log("c");
  } else {
    console.log("d");
  }
}
//Output: c.
