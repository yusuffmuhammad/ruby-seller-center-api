import express from "express";
import response from "../utils/response.js";
import { UserController } from "../controllers/userController.js";

import { verifyTokenMiddleware } from "../middleware/authJwtMiddleware.js";

const router = express.Router();
const userController = new UserController();

router.get("/profile", [verifyTokenMiddleware], async (req, res) => {
  try {
    const result = await userController.getUserProfile(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    res.status(error?.status || response.HTTP_INTERNAL_SERVER_ERROR).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

export default router;
