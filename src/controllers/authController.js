import { AuthService } from "../services/authService.js";
import { validator } from "../helpers/validate.js";
import response from "../utils/response.js";

const authService = new AuthService();

class AuthController {
  async postRegister(req) {
    const validationRule = {
      phoneNumber: "required",
      email: "required|email",
      username: "required",
      password: "required",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        throw {
          status: response.HTTP_UNPROCESSABLE_ENTITY,
          message: err,
        };
      }
    });

    try {
      const { body } = req;

      const newUser = {
        phoneNumber: body.phoneNumber,
        email: body.email,
        username: body.username,
        password: body.password,
      };
      const createdUser = await authService.postRegister(newUser);

      return {
        success: true,
        message: "Successfully registered",
        data: createdUser,
      };
    } catch (error) {
      throw error;
    }
  }

  async postLogin(req) {
    try {
      const { body } = req;

      const data = await authService.postLogin(body);

      return {
        success: true,
        message: "Successfully login",
        data: data,
      };
    } catch (error) {
      throw error;
    }
  }
}
export { AuthController };
