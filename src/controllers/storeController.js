import { StoreService } from "../services/storeService.js";

const storeService = new StoreService();

class StoreController {
  async postStore(req) {
    const userId = req.userId;
    try {
      const { body } = req;
      body.userId = userId;
      const createdStore = await storeService.postStore(body);

      return {
        success: true,
        message: "Successfully create new store",
        data: createdStore,
      };
    } catch (error) {
      throw error;
    }
  }

  async getDetailStore(req) {
    try {
      const {
        params: { storeId },
      } = req;

      const store = await storeService.findById(storeId);
      return {
        success: true,
        message: "Successfully get data",
        data: store,
      };
    } catch (error) {
      throw error;
    }
  }
}

export { StoreController };
