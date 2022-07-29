// IMPORTANT: solve all problems using using destructuring and rest syntax

// ============================================================================= //
//1.
// remove first element from places array and print the remaining array
//result = ['gurgaon', 'jaipur', 'pune']

const places = ["delhi", "gurgaon", "jaipur", "pune"];
const morePlaces = ["kochi", "hyderabad", "Shimla", "Srinagar"];

const [b, ...rest] = places;
console.log(rest);
