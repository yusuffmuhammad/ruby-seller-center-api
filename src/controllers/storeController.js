import { StoreService } from "../services/storeService.js";
import response from "../utils/response.js";
import fs from "fs";

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

  async updateImageStore(req) {
    if (!req.file) {
      throw {
        status: response.HTTP_UNPROCESSABLE_ENTITY,
        message: "Image is required",
      };
    }

    try {
      const {
        params: { storeId },
      } = req;

      // Remove existing image
      const store = await storeService.findById(storeId);
      if (store) {
        fs.unlinkSync(store.image.path);
      }

      console.log(req.headers.host);

      let body = {};
      req.file.imageurl = `${req.headers.host}`;
      body.image = req.file;
      const updatedStore = await storeService.findByIdAndUpdate(storeId, body);

      return {
        success: true,
        message: "Successfully update image store",
        data: updatedStore,
      };
    } catch (error) {
      throw error;
    }
  }
}

export { StoreController };
