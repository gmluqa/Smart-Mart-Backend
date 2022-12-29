require("dotenv").config();

// Express Server
const app = require("./app");

const PORT = 3000;

// Sequelize mysql db connection
const db = require("./db/db.js");

// Connection, sync DB with db.js params
app.listen(PORT, () => {
  console.log(
    `Listening on ${process.env.DB_HOST}:${PORT}, \nWelcome to The Comfy Zone 😎`
  );

  db.sync({ force: true })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Uh oh, error: " + error);
    });
});
