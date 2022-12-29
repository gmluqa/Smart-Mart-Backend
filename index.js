require("dotenv").config();

// Express Server
const app = require("./app");

const PORT = 3000;

// Sequelize mysql db connection
const db = require("./db/db.js");

// Connection, sync DB with db.js params
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening at port:${PORT}, \nWelcome to the Smart Mart DB 😎`);

  db.sync({ force: true })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Uh oh, error: " + error);
    });
});

app.get("/", function (req, res) {
  res.send("hello world!");
});
