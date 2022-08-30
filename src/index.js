// source : https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config/default.js";

import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import storeRouter from "./routes/storeRouter.js";
import regionRouter from "./routes/regionRouter.js";

const app = express();
const PORT = config.appPort;

app.use(bodyParser.json());

// *** MONGO CONNECTION ***
mongoose.connect(config.dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: config.dbUserName,
  pass: config.dbPassword,
  dbName: config.dbDatabase,
});
console.log(config.dbConfig);
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
