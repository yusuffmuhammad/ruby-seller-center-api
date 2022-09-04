import storeModel from "../models/storeModel.js";
import response from "../utils/response.js";

class StoreService {
  async postStore(newStore) {
    const existStore = this.findByUserId(newStore.userId);
    if (existStore) {
      throw {
        status: response.HTTP_UNPROCESSABLE_ENTITY,
        message: "You have already store",
      };
    }

    try {
      const storeToInsert = {
        ...newStore,
        status: "active",
      };
      const store = new storeModel(storeToInsert);
      const createdStore = await store.save();

      return createdStore;
    } catch (error) {
      throw error;
    }
  }

  async findByUserId(userId) {
    try {
      const store = await storeModel.findOne({ userId: userId });
      return store;
    } catch (error) {
      throw error;
    }
  }

  async findById(storeId) {
    try {
      const store = await storeModel.findOne({ _id: storeId });
      if (!store) {
        throw {
          status: response.HTTP_UNPROCESSABLE_ENTITY,
          message: "Store not found",
        };
      }

      return store;
    } catch (error) {
      throw error;
    }
  }
}

export { StoreService };
