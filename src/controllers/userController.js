import { UserService } from "../services/userService.js";

const userService = new UserService();

class UserController {
  async getUserProfile(req) {
    try {
      const userId = req.userId;
      const user = await userService.findById(userId);
      return {
        success: true,
        message: "Successfully get data",
        data: user,
      };
    } catch (error) {
      throw error;
    }
  }
}

export { UserController };
