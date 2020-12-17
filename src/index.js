const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/route/:name", (req, res) => {
  console.log(req.params.name);
  res.send("ping " + req.params.name + " :D");
});

app.listen(7211, () => {
  console.log("listening on 7211");
});
