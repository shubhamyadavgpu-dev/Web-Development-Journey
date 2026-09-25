const fs = require("fs");

fs.writeFileSync("Chapter34.txt" , "Name : Karan \n Course : Node.js");

let file = fs.readFileSync("Chapter34.txt" , "utf-8");
console.log(file);

fs.appendFileSync("Chapter34.txt" , "\n learning Backend Development");

let update = fs.readFileSync("Chapter34.txt" , "utf-8");
console.log(update);