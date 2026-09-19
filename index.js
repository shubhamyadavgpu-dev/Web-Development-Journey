const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});

app.get((req, res) => {
  console.log("Request is received");
  let code = "<ol>Fruit<li>banana</li><li>Apple</li></ol>";
  res.send(code);
});

app.get("/", (req, res) => {
  res.send("Hello i am nodemon");
});

app.get("/apple", (req, res) => {
  res.send("You contact apple page");
});

app.get("/banana", (req, res) => {
  res.send("You contact banana page");
});

app.get("/cherry", (req, res) => {
  res.send("You contact cherry page");
});

app.get("/:username/:id", (req, res) => {
  let {username , id} = req.params;
  let str = `<h3>Welcome to the page of @${username}</h3>`;
  res.send(str);
});
app.get("/search", (req,res) => {
  let {q} = res.query;
  if(!q){
    res.send("Nothing send");
  }
  res.send("no result");
})