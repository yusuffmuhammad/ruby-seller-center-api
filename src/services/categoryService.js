import categoryModel from "../models/categoryModel.js";
import connection from "../config/connection.js";

class CategoryService {
  async getAllCategory() {
    try {
      const allCategory = await categoryModel.find({});
      return allCategory;
    } catch (error) {
      throw error;
    }
  }

  async postCategory(newCategory) {
    const session = await connection.startSession();

    try {
      session.startTransaction();

      // to pass a `session` to `Model.create()` in Mongoose, you **must** pass an array as the first argument
      const categoryToInsert = [newCategory];
      const category = await categoryModel.create(categoryToInsert, {
        session,
      });

      await session.commitTransaction();

      return category;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }

    session.endSession();
  }
}

export { CategoryService };
