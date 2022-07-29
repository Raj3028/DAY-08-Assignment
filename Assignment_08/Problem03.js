// problem 3
/**
 * what will be the result of the consoles and why?
 *
 */

let age = 20;
age = 100;
const place = "Delhi";
{
  let age = 30;
  age = 40;
  console.log("this is age one ===>", age);
  console.log("this is place ====>", place);
}

age = 60;
console.log("this is age two ===>", age);

// ANSWER: There are three outputs here.
// Such as: this is age one ===> 40(i.e. this a value which is inside block. In that block there are one value that is "age=40".This is closer value. Thats why output is "this is age one ===> 40")
//this is place ====> Delhi( This value comes from out side of block. Here always block can have access to go outside and can take value But outside/ global can't have access. so there values not given inside the block that's why place got the value from global.)
//this is age two ===> 60(This value is global value. fisrtly we create a  age value is 20 then changed to 100 then again changed to 60. Then the final value is "60")
