import userModel from "../models/userModel.js";

class UserService {
  async findByEmail(email) {
    try {
      const user = await userModel.findOne({ email: email });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findById(userId) {
    try {
      const user = await userModel.findOne({ _id: userId });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export { UserService };
