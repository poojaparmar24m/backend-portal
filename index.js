const express = require("express");
const app = express();
const sequelize = require("./src/config/dbConnection");
const cors = require("cors");
const port = 8081;

sequelize
  .authenticate()
  .then(() => {
    console.log("database connection successfully!");
  })
  .catch((error) => {
    console.log("error", error.message);
  });

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running!",
  });
});

app.listen(port, () => {
  console.log(`server running on port https://localhost:${port}`);
});
