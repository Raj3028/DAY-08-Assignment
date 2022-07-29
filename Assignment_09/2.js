//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

const places = ["delhi", "gurgaon", "jaipur", "pune"];
let morePlaces = ["kochi", "hyderabad", "Shimla", "Srinagar"];

morePlaces = ["delhi", ...morePlaces];
console.log(morePlaces);
