const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo, desde Node.js</h1>");
});

app.get("/cv", (req, res) => {
  res.send("<h1>Hola soy dilin y busco mi segunda chamba</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
