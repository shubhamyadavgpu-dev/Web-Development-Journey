const fs = require("fs").promises;

fs.writeFile("test.txt" , "name :karn")
  .then(() =>{
    console.log("File created !");
  })
  .catch((err)=>{
    console.log("Error");
  })