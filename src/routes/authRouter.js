import express from "express";
import response from "../utils/response.js";
import { AuthController } from "../controllers/authController.js";

const router = express.Router();
const authController = new AuthController();

router.post("/register", async (req, res) => {
  try {
    const result = await authController.postRegister(req);
    return res.status(response.HTTP_OK).send(result);
  } catch (error) {
    res.status(error?.status || 500).send({
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
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});
export default router;
