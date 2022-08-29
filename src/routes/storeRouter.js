import express from "express";
import { StoreController } from "../controllers/storeController.js";
import { verifyToken } from "../middleware/authJwt.js";
import response from "../utils/response.js";

const router = express.Router();
const storeController = new StoreController();

router.post("/", [verifyToken], (req, res) => {
  try {
    const result = storeController.postStore(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

export default router;
