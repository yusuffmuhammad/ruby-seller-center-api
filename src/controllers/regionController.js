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
}

export { RegionController };
