const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mode: {
      type: String,
    },
    equipment: {
      type: Array,
    },
    exercises: {
      type: Array,
    },
    createdAt: {
      type: String,
    },
    updatedAt: {
      type: String,
    },
    trainerTips: {
      type: Array,
    },
  },
  {
    versionKey: false,
  }
);
const workout = new mongoose.model("Workout", schema);

module.exports = workout;
