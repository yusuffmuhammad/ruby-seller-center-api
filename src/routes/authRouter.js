import express from "express";
import response from "../utils/response.js";
import { AuthController } from "../controllers/authController.js";
import logger from "../config/winston.js";
import baseURL from "../helpers/baseURL.js";

const router = express.Router();
const authController = new AuthController();

router.post("/register", async (req, res) => {
  try {
    const result = await authController.postRegister(req);
    return res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await authController.postLogin(req);
    return res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.get("/test", (req, res) => {
  console.log(baseURL);
  res.send("yusuf");
});
export default router;
