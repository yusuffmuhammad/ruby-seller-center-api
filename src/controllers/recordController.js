const recordService = require("../services/recordService");
const { HTTP_INTERNAL_SERVER_ERROR } = require("../utils/response");
const Response = require("../utils/response");

const getRecordForWorkout = async (req, res) => {
  const {
    params: { workoutId },
  } = req;

  try {
    const record = await recordService.getRecordForWorkout(workoutId);
    res.status(Response.HTTP_OK).send({
      status: "OK",
      data: record,
    });
  } catch (error) {
    res
      .status(error?.status || HTTP_INTERNAL_SERVER_ERROR)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = { getRecordForWorkout };
