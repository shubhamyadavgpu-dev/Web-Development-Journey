const fs = require("fs").promises;

async function hello() {
  await fs.writeFile("Student.txt", "I am learning node");
  console.log("File created successfully ! ");
}
hello();
