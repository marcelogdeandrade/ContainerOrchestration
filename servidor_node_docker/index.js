const express = require('express');
const path = require("path");

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.render("index");
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);