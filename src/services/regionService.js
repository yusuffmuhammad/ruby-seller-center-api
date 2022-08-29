import indonesia from "territory-indonesia";

class RegionService {
  async getAllProvince(req) {
    try {
      const allProvince = await indonesia.getAllProvinces();
      return allProvince;
    } catch (error) {
      throw error;
    }
  }
}
export { RegionService };
