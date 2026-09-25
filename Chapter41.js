const fs = require("fs");

// SYNCHRONOUS JS
console.log(1);
fs.writeFileSync("test.txt", "Hello");
console.log(2);

//ASYNCHRONOUS JS
console.log(1);
fs.writeFile("test.txt", "Hello Wolrd! " , ()=>{  // this is callback function
    console.log("File writing is completed");
});
console.log(2);