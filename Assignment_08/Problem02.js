// problem 2

/**
 * concat the strings in the above array to get the following result
 * "Hi, my name is Akash."
 * Caution: string has a comma and a full stop
 */

// Hint: solve this using for loop

const letters = ["Hi", " my", " name", " is", " Raj"];

let s = letters[0] + ",";
for (let i = 1; i < letters.length; i++) {
  s = s + letters[i];
}
s = s + ".";
console.log(s);

//Output: Hi, my name is Raj.
