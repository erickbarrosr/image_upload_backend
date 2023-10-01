const express = require("express");
const db = require("./db");

require("dotenv").config();

const app = express();
db();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server connected on http://localhost:${port}`);
});
