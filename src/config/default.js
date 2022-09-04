import dotenv from "dotenv/config";

export default {
  appPort: process.env.APP_PORT || 3000,
  //dbConfig: `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PORT}`,
  dbConfig: `mongodb+srv://cluster0.kktb5zy.mongodb.net`,
  //dbConfig: `mongodb://DESKTOP-9S8JED9:27017,DESKTOP-9S8JED9:27018,DESKTOP-9S8JED9:27019?replicaSet=rs`,
  dbDatabase: process.env.DB_DATABASE,
  dbUserName: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY || "MuadzDanMazna",
};
