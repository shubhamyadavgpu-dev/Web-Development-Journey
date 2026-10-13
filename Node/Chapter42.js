const fs = require("fs");

console.log("Starting ....");
fs.writeFile("Chapter43.txt", "Name : Karan Malhotra \n Age : 32", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
console.log("Program continues...");
