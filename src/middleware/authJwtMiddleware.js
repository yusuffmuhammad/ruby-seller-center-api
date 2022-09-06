import jwt from "jsonwebtoken";
import config from "../config/default.js";
import response from "../utils/response.js";

export const verifyTokenMiddleware = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(response.HTTP_FORBIDDEN).send({
      status: false,
      data: { error: "No token provided!" },
    });
  }
  jwt.verify(token, config.jwtPrivateKey, (err, decoded) => {
    if (err) {
      return res.status(response.HTTP_UNAUTHORIZED).send({
        status: false,
        data: { error: "Unauthorized!" },
      });
    }
    req.userId = decoded.id;
    next();
  });
};
