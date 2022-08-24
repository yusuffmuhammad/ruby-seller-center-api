// source : https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/default");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = config.appPort;
app.use(bodyParser.json());

// *** MONGO CONNECTION ***
mongoose.connect(config.dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// *** ROUTES ***
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
