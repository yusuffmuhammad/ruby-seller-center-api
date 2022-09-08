import { CategoryService } from "../services/categoryService.js";

const categoryService = new CategoryService();

class CategoryController {
  async getAllCategory() {
    try {
      const allCategory = await categoryService.getAllCategory();
      return {
        success: true,
        message: "Successfully get data",
        data: allCategory,
      };
    } catch (error) {
      throw error;
    }
  }

  async postCategory(req) {
    try {
      const { body } = req;
      const category = await categoryService.postCategory(body);
      return {
        success: true,
        message: "Succesfully add new category",
        data: category,
      };
    } catch (error) {
      throw error;
    }
  }
}

export { CategoryController };
