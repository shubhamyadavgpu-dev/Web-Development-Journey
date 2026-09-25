// FILE SYSTEM(fs)

const fs = require("fs");

//Write/Creates a File
fs.writeFileSync("Chapter32.txt" , "Hello i am learing Node.js");

//Append Data
fs.appendFileSync("Chapter32.txt" , "\nHere is the new data");

//Read a File
const data = fs.readFileSync("Chapter32.txt" , "utf-8");
console.log("Data is Reading : " + data);
