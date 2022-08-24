import express from "express";
import response from "../utils/response.js";
import { UserController } from "../controllers/userController.js";

import { verifyToken } from "../middleware/authJwt.js";

const router = express.Router();
const userController = new UserController();

router.get("/profile", [verifyToken], async (req, res) => {
  try {
    const userId = req.userId;
    const result = await userController.getUserProfile(userId);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

export default router;
