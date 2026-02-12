require("dotenv").config();
require("module-alias/register");

const express = require("express");
const app = express();
const routeAPI = require("@/routes/index.js");
const { apiRateLimiter } = require("@/middlewares/rateLimiter");
const responseFormat = require("@/middlewares/responseFormat");
const notFoundHandler = require("@/middlewares/notFoundHandler");
const exceptionHandler = require("@/middlewares/exceptionHandler");
const port = 3001;

app.use(express.json());
app.use(responseFormat);
app.use(apiRateLimiter);

app.use("/api", routeAPI);

app.use(notFoundHandler);
app.use(exceptionHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
