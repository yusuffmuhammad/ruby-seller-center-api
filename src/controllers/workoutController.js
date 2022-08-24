const workoutService = require("../services/workoutService");
const Response = require("../utils/response");

const getAllWorkouts = async (req, res) => {
  try {
    const { name } = req.query;
    const allWorkouts = await workoutService.getAllWorkouts({ name });
    res.status(Response.HTTP_OK).send({
      status: "OK",
      data: allWorkouts,
    });
  } catch (error) {
    res
      .status(error?.status || Response.HTTP_INTERNAL_SERVER_ERROR)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneWorkout = async (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(Response.HTTP_BAD_REQUEST).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const workout = await workoutService.getOneWorkout(workoutId);
    res.send({
      status: "OK",
      data: workout,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewWorkout = async (req, res) => {
  const { body } = req;

  // To improve the request validation you normally would use a third party package like express-validator.
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(Response.HTTP_BAD_REQUEST).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  try {
    const createdWorkout = await workoutService.createNewWorkout(newWorkout);
    res.status(200).send({
      status: "OK",
      data: createdWorkout,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWorkout = async (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(Response.HTTP_BAD_REQUEST).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const updatedWorkout = await workoutService.updateOneWorkout(
      workoutId,
      body
    );

    res.send({
      status: "OK",
      data: updatedWorkout,
    });
  } catch (error) {
    res
      .status(error?.status || Response.HTTP_INTERNAL_SERVER_ERROR)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = async (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(Response.HTTP_BAD_REQUEST).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    await workoutService.deleteOneWorkout(workoutId);

    res.send({
      status: "OK",
    });
  } catch (error) {
    res
      .status(error?.status || Response.HTTP_INTERNAL_SERVER_ERROR)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
