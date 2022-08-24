const workoutModel = require("../models/workoutModel");

const getAllWorkouts = async (filterParams) => {
  try {
    const allWorkouts = await workoutModel.find({
      name: { $regex: filterParams.name },
    });
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = async (workoutId) => {
  try {
    const workout = await workoutModel.findById(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = async (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    createdAt: new Date().toLocaleString("id-ID", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("id-ID", { timeZone: "UTC" }),
  };

  try {
    const workout = new workoutModel(workoutToInsert);
    const createdWorkout = await workout.save();
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = async (workoutId, changes) => {
  try {
    const updatedWorkout = await workoutModel.findByIdAndUpdate(
      workoutId,
      changes,
      { useFindAndModify: false }
    );

    if (!updatedWorkout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }

    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = async (workoutId) => {
  try {
    const deletedWorkout = await workoutModel.findByIdAndRemove(workoutId);

    if (!deletedWorkout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
