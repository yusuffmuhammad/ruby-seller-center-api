import { RegionService } from "../services/regionService.js";

const regionService = new RegionService();

class RegionController {
  async getAllProvince(req) {
    try {
      const allProvince = await regionService.getAllProvince(req);
      return {
        success: true,
        message: "Successfully get data",
        data: allProvince,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllCityByProvinceId(req) {
    try {
      const {
        params: { provinceId },
      } = req;
      const allCity = await regionService.getAllCityByProvinceId(provinceId);
      return {
        success: true,
        message: "Successfully get data",
        data: allCity,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllDistrictByCityId(req) {
    try {
      const {
        params: { cityId },
      } = req;
      const allDistrict = await regionService.getAllDistrictByCityId(cityId);
      return {
        success: true,
        message: "Successfully get data",
        data: allDistrict,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllVillageByDistrictId(req) {
    try {
      const {
        params: { districtId },
      } = req;
      const allVillage = await regionService.getAllVillageByDistrictId(
        districtId
      );
      return {
        success: true,
        message: "Successfully get data",
        data: allVillage,
      };
    } catch (error) {
      throw error;
    }
  }
}

export { RegionController };
