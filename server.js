const express = require("express");
const chalk = require("chalk");

const app = express();

console.log(chalk.green("Hello World"));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Hello World on port 3000");
});
