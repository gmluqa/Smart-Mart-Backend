require("dotenv").config();

// Express Server
const express = require("express");
const app = express();

const PORT = 3000;

// Sequelize mysql db connection
const db = require("./db/db.js");

// Connection, sync DB with db.js params
app.listen(process.env.PORT || PORT, () => {
  console.log(`Smart Mart Express server listening at localhost:${PORT}`);

  db.sync({ force: true })
    .then(() => {
      console.log("Connected!");
    })
    .catch((error) => {
      console.log("Uh oh, error ->", error);
    });
});

app.get("/", function (req, res) {
  res.send("hello world!");
});
