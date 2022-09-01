import dotenv from "dotenv/config";

export default {
  appPort: process.env.APP_PORT || 3000,
  dbConfig: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,
  dbDatabase: process.env.DB_DATABASE,
  dbUserName: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY || "MuadzDanMazna",
};
