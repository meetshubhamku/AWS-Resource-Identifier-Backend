const express = require("express");
const morgan = require("morgan");
const app = express();
const EC2Router = require("./AWS/EC2/EC2Router");
const s3Router = require("./AWS/S3/S3Router");
const cors = require("cors");
const port = 3001;
app.use(morgan("dev"));
app.use(cors());
require("dotenv").config();

app.use("/api", s3Router);
app.use("/api", EC2Router);

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
