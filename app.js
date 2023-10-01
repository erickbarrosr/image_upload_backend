const express = require("express");
const db = require("./db");

require("dotenv").config();

const app = express();
db();

const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture");

app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log(`Server connected on http://localhost:${port}`);
});
