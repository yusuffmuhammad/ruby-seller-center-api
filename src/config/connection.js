import mongoose from "mongoose";
import config from "./default.js";

console.log("Start connection...");
mongoose.connect(config.dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: config.dbUserName,
  pass: config.dbPassword,
  dbName: config.dbDatabase,
});

export default mongoose;
