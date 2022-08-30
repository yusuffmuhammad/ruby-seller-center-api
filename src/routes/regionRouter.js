import express from "express";
import response from "../utils/response.js";
import { RegionController } from "../controllers/regionController.js";

import { verifyToken } from "../middleware/authJwt.js";

const router = express.Router();
const regionController = new RegionController();

router.get("/provinces", [verifyToken], async (req, res) => {
  try {
    const result = await regionController.getAllProvince(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.get("/provinces/:provinceId/cities", [verifyToken], async (req, res) => {
  try {
    const result = await regionController.getAllCityByProvinceId(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.get("/cities/:cityId/districts", [verifyToken], async (req, res) => {
  try {
    const result = await regionController.getAllDistrictByCityId(req);
    res.status(response.HTTP_OK).send(result);
  } catch (error) {
    res.status(error?.status || 500).send({
      status: false,
      data: { error: error?.message || error },
    });
  }
});

router.get(
  "/districts/:districtId/villages",
  [verifyToken],
  async (req, res) => {
    try {
      const result = await regionController.getAllVillageByDistrictId(req);
      res.status(response.HTTP_OK).send(result);
    } catch (error) {
      res.status(error?.status || 500).send({
        status: false,
        data: { error: error?.message || error },
      });
    }
  }
);

export default router;
