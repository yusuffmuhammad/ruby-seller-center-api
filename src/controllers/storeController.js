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
}

export { StoreController };
