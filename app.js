const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let todayDate = new Date();
  let format = `${todayDate.getDate()}/${
    todayDate.getMonth() + 1
  }/${todayDate.getFullYear()}`;
  let result = addDays(format, 100);
  response.send(result);
});

app.listen(3000);
module.exports = app;
