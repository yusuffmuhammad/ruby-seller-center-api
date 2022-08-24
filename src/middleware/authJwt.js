import jwt from "jsonwebtoken";
import config from "../config/default.js";

export const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      status: false,
      data: { error: "No token provided!" },
    });
  }
  jwt.verify(token, config.jwtPrivateKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: false,
        data: { error: "Unauthorized!" },
      });
    }
    req.userId = decoded.id;
    next();
  });
};
