import uploadImageStoreMiddleware from "../middleware/uploadImageStoreMiddleware.js";
import { verifyTokenMiddleware } from "../middleware/authJwtMiddleware.js";
import { StoreController } from "../controllers/storeController.js";
import response from "../utils/response.js";
import logger from "../config/winston.js";
import express from "express";

const router = express.Router();
const storeController = new StoreController();

router.post("/", [verifyTokenMiddleware], async (req, res) => {
  try {
    const result = await storeController.postStore(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.get("/:storeId", [verifyTokenMiddleware], async (req, res) => {
  try {
    const result = await storeController.getDetailStore(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.patch(
  "/:storeId/images",
  [verifyTokenMiddleware, uploadImageStoreMiddleware],
  async (req, res) => {
    try {
      const result = await storeController.updateImageStore(req);
      res.status(response.HTTP_OK).send(result);
    } catch (error) {
      logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
      res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
        status: false,
        data: { error: error?.message || error },
      });
    }
  }
);

export default router;
