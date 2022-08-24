const RecordModel = require("../models/recordModel");

const getRecordForWorkout = async (workoutId) => {
  try {
    const recordForWorkout = await RecordModel.find({ workout: workoutId });
    return recordForWorkout;
  } catch (error) {
    throw error;
  }
};

module.exports = { getRecordForWorkout };
