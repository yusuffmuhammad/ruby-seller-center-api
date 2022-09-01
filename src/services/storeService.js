import storeModel from "../models/storeModel.js";

class StoreService {
  async postStore(newStore) {
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
}

export { StoreService };
