import express from "express";
import { CategoryController } from "../controllers/categoryController.js";
import response from "../utils/response.js";
import logger from "../config/winston.js";
import { verifyTokenMiddleware } from "../middleware/authJwtMiddleware.js";

const router = express.Router();
const categoryController = new CategoryController();

router.get("/", [verifyTokenMiddleware], async (req, res) => {
  try {
    const result = await categoryController.getAllCategory();
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.post("/", [verifyTokenMiddleware], async (req, res) => {
  try {
    const result = await categoryController.postCategory(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

export default router;
