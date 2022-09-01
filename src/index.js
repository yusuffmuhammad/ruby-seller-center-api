// source : https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import createHttpError from "http-errors";
import config from "./config/default.js";
import morgan from "morgan";
import winston from "./config/winston.js";

import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import storeRouter from "./routes/storeRouter.js";
import regionRouter from "./routes/regionRouter.js";

const app = express();
const PORT = config.appPort;

app.use(morgan("combined", { stream: winston.stream }));
app.use(bodyParser.json());

// *** MONGO CONNECTION ***
mongoose.connect(config.dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: config.dbUserName,
  pass: config.dbPassword,
  dbName: config.dbDatabase,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// *** ROUTES ***
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/stores", storeRouter);
app.use("/api/regions", regionRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // add this line to include winston logging
  winston.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
