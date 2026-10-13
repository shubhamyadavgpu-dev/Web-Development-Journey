const path = require("path");

//Dirname
const filepath1 = path.join(__dirname, "Student.txt");
console.log(filepath1);

//OR
const filepath = path.join("Backend" , "CRUD Practice" , "node" , "Chapter31.js");
console.log(filepath);

// Basename()
const filepath2 = path.basename("Backend/CRUD Practice/node/Chapter31.js");
console.log(filepath2);

//Directory name
const filedir = path.dirname("Backend/CRUD Practice/node/Chapter31.js");
console.log(filedir);

//File extension ()

const fileext = path.extname("Chapter61.js");
console.log(fileext);