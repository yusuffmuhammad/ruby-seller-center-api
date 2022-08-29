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

  async getAllCityByProvinceId(provinceId) {
    try {
      const allCity = await indonesia.getRegenciesOfProvinceId(provinceId);
      return allCity;
    } catch (error) {
      throw error;
    }
  }

  async getAllDistrictByCityId(cityId) {
    try {
      const allCity = await indonesia.getDistrictsOfRegencyId(cityId);
      return allCity;
    } catch (error) {
      throw error;
    }
  }
}
export { RegionService };
