import userModel from "../models/userModel.js";
import { UserService } from "../services/userService.js";
import bcrypt from "bcrypt";
import response from "../utils/response.js";
import config from "../config/default.js";
import jwt from "jsonwebtoken";
import connection from "../config/connection.js";

const userService = new UserService();

class AuthService {
  async postRegister(newUser) {
    const session = await connection.startSession();
    try {
      session.startTransaction();
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      const userToInsert = [
        {
          ...newUser,
          password: hashedPassword,
        },
      ];
      const user = await userModel.create(userToInsert, { session });
      await session.commitTransaction();
      return user;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
    session.endSession();
  }

  async postLogin(loginParams) {
    try {
      const user = await userService.findByEmail(loginParams.email);

      if (!user) {
        throw {
          status: response.HTTP_UNPROCESSABLE_ENTITY,
          message: `can't find user with the email ${loginParams.email}`,
        };
      }

      const passwordMatch = await bcrypt.compare(
        loginParams.password,
        user.password
      );

      if (passwordMatch) {
        const jwtToken = await jwt.sign(
          { id: user._id, email: user.email, username: user.username },
          config.jwtPrivateKey,
          { algorithm: "HS256" }
        );

        return {
          token: jwtToken,
        };
      } else {
        throw {
          status: response.HTTP_UNPROCESSABLE_ENTITY,
          message: `passwords don't match`,
        };
      }
    } catch (error) {
      throw error;
    }
  }
}

export { AuthService };
