const express = require("express");
const db = require("./db");
const routes = require('./routes')
const app = express();
const port = process.env.PORT || 3500;

db.connect().then((response) => {
  if (response.connection) {
    const { name, host } = response.connection;
    console.log(`connected to Mongo Atlas Host: ${host}`);
    console.log(`connected to Database: ${name}`);
    app.listen(port)
    app.use(routes)
    console.log(`Using Port : ${port}`);
  } else {
    console.log(`Error connecting to database`);
    console.log(`ERROR CODE: ${response.code}`);
  }
});
