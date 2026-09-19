const express = require("express");
const app = express();

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.send("this is home");
});

app.get("/rolldice", (req, res) => {
  let rolldice = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { rolldice });
});

// app.get("/ig/:username", (req, res) => {
//   let followers = ["ads", "ass", "zas"];
//   let { username } = req.params;
//   res.render("instagram.ejs", { username, followers });
// });
app.get("/ig/:username", (req, res) => {

    let { username } = req.params;

    const instadata = require("./data.json");

    const data = instadata[username];

    console.log(data);

    res.render("instagram.ejs", { data });

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
