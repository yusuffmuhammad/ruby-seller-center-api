import dotenv from "dotenv/config";

export default {
  appPort: process.env.APP_PORT || 3000,
  dbConfig: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY || "MuadzDanMazna",
};
