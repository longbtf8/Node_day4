require("dotenv").config();
const express = require("express");
const app = express();
const routeAPI = require("@/routes/index.js");
const port = 3001;

app.use(express.json());
app.use("/api", routeAPI);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
