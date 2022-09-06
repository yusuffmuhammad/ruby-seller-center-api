import express from "express";
import response from "../utils/response.js";
import { RegionController } from "../controllers/regionController.js";
import logger from "../config/winston.js";

import { verifyTokenMiddleware } from "../middleware/authJwtMiddleware.js";

const router = express.Router();
const regionController = new RegionController();

router.get("/provinces", [verifyTokenMiddleware], async (req, res) => {
  try {
    const result = await regionController.getAllProvince(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.get(
  "/provinces/:provinceId/cities",
  [verifyTokenMiddleware],
  async (req, res) => {
    try {
      const result = await regionController.getAllCityByProvinceId(req);
      res.status(response.HTTP_OK).send(result);
    } catch (error) {
      logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
      res.status(error?.status || 500).send({
        status: false,
        data: { error: error?.message || error },
      });
    }
  }
);

router.get(
  "/cities/:cityId/districts",
  [verifyTokenMiddleware],
  async (req, res) => {
    try {
      const result = await regionController.getAllDistrictByCityId(req);
      res.status(response.HTTP_OK).send(result);
    } catch (error) {
      logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
      res.status(error?.status || 500).send({
        status: false,
        data: { error: error?.message || error },
      });
    }
  }
);

router.get(
  "/districts/:districtId/villages",
  [verifyTokenMiddleware],
  async (req, res) => {
    try {
      const result = await regionController.getAllVillageByDistrictId(req);
      res.status(response.HTTP_OK).send(result);
    } catch (error) {
      logger.error(`message - ${error.message}, stack trace - ${error.stack}`);
      res.status(error?.status || 500).send({
        status: false,
        data: { error: error?.message || error },
      });
    }
  }
);

export default router;
