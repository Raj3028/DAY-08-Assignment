// 4.
// destructure and store pincode into a variable named myPincode

const myData = {
  name: "Rahul",
  age: 20,
  gender: "male",
  address: {
    pinCode: 759019,
    city: "delhi",
  },
  likes: ["music", "movies"],
};
let { name, age, gende, address, likes } = myData;
let { pinCode, city } = address;
let myPincode = pinCode;
console.log(myPincode);
