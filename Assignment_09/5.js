// 5.
// destructure and store second like into a vaiable named myLike:

const myData = {
  name: "Rahul",
  age: 20,
  gender: "male",
  address: {
    pinCode: 123455,
    city: "delhi",
  },
  likes: ["music", "movies"],
};
let { name, age, gende, address, likes } = myData;
let [music, movies] = likes;
let myLike = movies;
console.log(myLike);

// method 02:
// const myData = {
//   name: "Rahul",
//   age: 20,
//   gender: "male",
//   address: {
//     pinCode: 123455,
//     city:"delhi"
//   },
//   likes:["music", "movies"]
// }
// const myLike=myData.likes[1]
// console.log(myLike)
