const {add , sub , mul} = require("./Chapter21");

console.log("Addition is : "+add(3,6));
console.log("Subtraction is : "+sub(8,9));
console.log("Multiply is : "+mul(8,9));

const {name , age  , gender } = require("./user");

console.log("Name : ",name("Karan"));
console.log("Age : ",age(32));
console.log("Gender : ",gender("Male"));
