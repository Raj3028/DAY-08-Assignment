// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]

const places = ["delhi", "gurgaon", "jaipur"];
const morePlaces = ["kochi", "hyderabad", "Shimla", "Srinagar"];

let result = [...morePlaces, ...places];
console.log(result);
