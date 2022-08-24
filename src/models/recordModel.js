const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  workout: {
    type: String,
  },
  record: {
    type: String,
  },
});

const record = new mongoose.model("Record", schema);

module.exports = record;
