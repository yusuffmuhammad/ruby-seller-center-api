import { StoreService } from "../services/storeService.js";

const storeService = new StoreService();

class StoreController {
  async postStore(req) {
    try {
      const { body } = req;
      console.log(body);
      return;
      const newStore = {};
      const createdStore = await storeService.postStore(newStore);

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
