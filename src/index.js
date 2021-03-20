const express = require("express");
let app = express();

function makeHtml(text) {
  let result = `
  <body>
    <h1>${text}<h2>
  </body>
  <style>
    h1 {
      font-family: Arial;
      text-align: center;
      width: 100%;
      text-transform: capitalize;
    }
    body {
      background-color: lightblue;
      display: flex;
      height: 100vh;
      flex-direction: row;
      align-items: center;
    }
  </style>
  `;
  return result;
}

app.get("/", (req, res) => {
  console.log("Index route hit, responding");
  res.send(makeHtml("hello from nodeJS!"));
});

app.get("/route/:name", (req, res) => {
  console.log("Name route hit, responding:");
  console.log(`Name parameter: ${req.params.name}`);
  res.send(makeHtml("ping " + req.params.name + " :D"));
});

app.listen(7211, () => {
  console.log("listening on 7211");
});
