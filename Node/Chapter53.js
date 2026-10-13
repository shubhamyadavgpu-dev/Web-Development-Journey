const fs = require("fs").promises;

async function Create(){
    await fs.writeFile("Chapter53.txt" , "Hello i am learning Node.js ! ");
    console.log("File created successfully ! ");
};

Create();