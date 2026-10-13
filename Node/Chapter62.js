const path = require("path");

const dir = path.dirname("Backend/CRUD Practice/node/Chapter31.js");
console.log(dir);

const join = path.join("data","student.txt");
console.log(join);

const basename = path.basename("Backend/CRUD Practice/node/Chapter31.js");
console.log(basename);

const fileext = path.extname("Backend/CRUD Practice/node/Chapter31.js");
console.log(fileext);