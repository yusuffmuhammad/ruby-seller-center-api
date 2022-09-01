import express from "express";
import { StoreController } from "../controllers/storeController.js";
import { verifyToken } from "../middleware/authJwt.js";
import response from "../utils/response.js";
import logger from "../config/winston.js";

const router = express.Router();
const storeController = new StoreController();

router.post("/", [verifyToken], async (req, res) => {
  try {
    const result = await storeController.postStore(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

export default router;
